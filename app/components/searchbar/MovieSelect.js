import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import TmdbApi from 'moviedb-api';
import {bindActionCreators} from 'redux'
import * as GenreActionCreators from './MovieSelectDucks.js';


var api = new TmdbApi({
  consume: false,
  apiKey: '129b82adc1def13dd1e9a702a0c5f58b'
});

var getGenres = function (input, callback) {
  var genreList = [];
  var apiGenres = [];
  api.request('/genre/movie/list', 'GET').then(function (data) {
      console.log(data);
      apiGenres = data.genres;
      for (var i = 0; i < apiGenres.length; i++) {
        genreList[i] = {label: apiGenres[i].name, value: apiGenres[i].name}
      }
      callback(null, {options: genreList, complete: true});
    })
    .catch(function (e) {
      console.log(e);
    });
};

var getKeywords = function (input, callback) {

  /** TODO update to keywords endpoint...*/
  var keywordList = [];
  var apiKeywords = [];
  var x = MovieSelect.state;
  api.request('/search/keyword', 'GET', {query: input}).then(function (data) {
      console.log(data);
      apiKeywords = data.results;
      for (var i = 0; i < apiKeywords.length; i++) {
        keywordList[i] = {label: apiKeywords[i].name, value: apiKeywords[i].name}
      }
      callback(null, {options: keywordList, complete: false});
      MovieSelect.setState(x);
    })
    .catch(function (e) {
      console.log(e);
    });
};

var MovieSelect = React.createClass({
  displayName: 'MultiSelectField',
  propTypes: {
    label: React.PropTypes.string
  },
  getInitialState () {
    return {
      disabled: false
    };
  },

  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  },
  handleGenreChange (e) {
    if (e == null) {
      this.setState({disabled: false, genres: []});
      this.props.updateGenre([]);
    } else {
      var genres = e.map(item => {
        if (item.value !== undefined) {
          return item.value;
        }
      });
      this.props.updateGenre(genres);
      this.setState({genres});
    }
  },
  filterOptions (options, filter, values) {
    if (!options) {
      options = [];
    }
    return options;
  },
  handleKeywordsChange (e){
    if (e == null) {
      this.setState({disabled: false, keywords: []});
      this.props.updateKeywords([]);
    } else {
      var keywords = e.map(item => {
        if (item.value !== undefined) {
          return item.value;
        }
      });
      this.props.updateKeyword(keywords);
      this.setState({keywords});
    }
  },
  setKeywordOptions(e){
    if (e.length > 3) {
      var keyWords = getKeywords(e);
      this.loadOptions(keyWords);
    }
  },
  toggleDisabled (e) {
    this.setState({disabled: e.target.checked});
  },

  render () {
    return (
      <div class="row">
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Genre</h3>
            <Select.Async
              multi name="form-field-name"
              disabled={this.state.disabled}
              value={this.state.genres}
              placeholder="Select your favourite"
              onChange={this.handleGenreChange}
              loadOptions={getGenres}
            />
          </div>
        </div>
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Keyword</h3>
            <Select.Async
              multi name="form-field-name"
              value={this.state.keywords}
              placeholder="Select your favourite"
              onChange={this.handleKeywordsChange}
              loadOptions={getKeywords}
              filterOptions={this.filterOptions}
            />
          </div>
        </div>
      </div>
    );
  }
});
const mapStateToProps = (state) => ({
  ...state.search
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(GenreActionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelect);
