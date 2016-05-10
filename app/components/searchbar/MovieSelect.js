import React from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ApiActionCreators from './MovieSelectDucks.js';
import apiConfig from './MovieDBConfig';
import TmdbApi from 'moviedb-api';

var api = new TmdbApi({
  consume: false,
  apiKey: apiConfig.apiKey
});

var getGenres = function (input, callback) {
  var genreList = [];
  var apiGenres = [];
  api.request('/genre/movie/list', 'GET').then(function (data) {
      apiGenres = data.genres;
      for (var i = 0; i < apiGenres.length; i++) {
        genreList[i] = {label: apiGenres[i].name, value: apiGenres[i].id}
      }
      callback(null, {options: genreList, complete: true});
    })
    .catch(function (e) {
      console.log(e);
    });
};
var getKeywords = function (input, callback) {

  var keywordList = [];
  var apiKeywords = [];
  if (this.props !== undefined) {

  }
  api.request('/search/keyword', 'GET', {query: input}).then(function (data) {
      apiKeywords = data.results;
      for (var i = 0; i < apiKeywords.length; i++) {
        keywordList[i] = {label: apiKeywords[i].name, value: apiKeywords[i].id}
      }
      callback(null, {options: keywordList, complete: false});
    })
    .catch(function (e) {
      console.log(e);
    })
};
var getActors = function (input, callback) {

  var actorList = [];
  var apiActors = [];
  api.request('/search/person', 'GET', {query: input}).then(function (data) {
      apiActors = data.results;
      for (var i = 0; i < apiActors.length; i++) {
        actorList[i] = {label: apiActors[i].name, value: apiActors[i].id}
      }
      callback(null, {options: actorList, complete: false});
    })
    .catch(function (e) {
      console.log(e);
    })
};
var MovieSelect = React.createClass({
  displayName: 'MultiSelectField',
  propTypes: {
    label: React.PropTypes.string
  },

  handleGenreChange (e) {
    if (e == null) this.props.updateGenre([]);
    else this.props.updateGenre(e);
  },
  handleKeywordsChange (e){
    if (e == null) this.props.updateKeyword([]);
    else this.props.updateKeyword(e);
  },
  handleActorChange (e){
    if (e == null) this.props.updateActor([]);
    else this.props.updateActor(e);
  },
  render()
  {
    return (
      <div class="row">
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Genre</h3>
            <Select.Async
              multi name="form-field-name"
              matchPos="start"
              value={this.props.genres}
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
              matchPos="start"
              value={this.props.keywords}
              placeholder="Select your favourite"
              onChange={this.handleKeywordsChange}
              loadOptions={getKeywords}
            />
          </div>
        </div>
        <div class="col-xs-6">
          <div className="section">
            <h3 className="section-heading">Exclude Actor</h3>
            <Select.Async
              multi name="form-field-name"
              matchPos="start"
              value={this.props.actors}
              placeholder="Select your favourite"
              onChange={this.handleActorChange}
              loadOptions={getActors}
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
  return bindActionCreators(ApiActionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelect);
