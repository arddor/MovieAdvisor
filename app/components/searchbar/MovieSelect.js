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
  var genreList;
  var apiGenres = [];
  genreList = [];
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
  var genreList;
  var apiGenres = [];
  genreList = [];
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
    this.props.updateGenre(e.value);
  },

  handleKeywordsChange (e){
    this.props.updateKeyword(e.value);
  },
  toggleDisabled (e) {
    this.setState({disabled: e.target.checked});
  },

  render () {
    let {genre} = this.props;
    let {keyword} = this.props;
    return (
      <div class="row">
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Genre</h3>
            <Select.Async
              name="form-field-name" disabled={this.state.disabled} value={genre}
              placeholder="Select your favourite" onChange={this.handleGenreChange}
              loadOptions={getGenres}
            />
          </div>
        </div>
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Keyword</h3>
            <Select.Async
              name="form-field-name" value={keyword}
              placeholder="Select your favourite" onChange={this.handleKeywordsChange}
              loadOptions={getKeywords}
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
