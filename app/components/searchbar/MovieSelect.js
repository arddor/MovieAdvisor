import React from 'react';
import Select from 'react-select';

import TmdbApi from 'moviedb-api'
var api = new TmdbApi({
  consume: false,
  apiKey: '129b82adc1def13dd1e9a702a0c5f58b'
})

function getGenreList() {
  var genreList;
  var apiGenres = [];
  genreList = [];
  api.request('/', 'GET').then(function (data) {
    console.log(data);
    apiGenres = data.genres;
    for (var i = 0; i < apiGenres.length; i++) {
      genreList[i] = {label: apiGenres[i].name, value: apiGenres[i].name}
    }
    console.log(genreList)

  });
  return genreList

}

var MovieSelect = React.createClass({
  displayName: 'MultiSelectField',
  propTypes: {
    label: React.PropTypes.string
  },
  getInitialState () {

    return {
      disabled: false,
      crazy: false,
      options: getGenreList(),
      value: []

    };
  },
  handleSelectChange (value) {
    this.setState({value});
  },
  toggleDisabled (e) {
    this.setState({disabled: e.target.checked});
  },

  render () {
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select multi simpleValue disabled={this.state.disabled} value={this.state.value}
                placeholder="Select your favourite(s)" options={this.state.options} onChange={this.handleSelectChange}>

        </Select>
      </div>
    );
  }
});

module.exports = MovieSelect;
