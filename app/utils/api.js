import apiConfig from './MovieDBConfig';
import TmdbApi from 'moviedb-api';

var api = new TmdbApi({
  consume: false,
  apiKey: apiConfig.apiKey
});


export const getGenres = (input='', callback) => {
  api.request('/genre/movie/list', 'GET')
    .then(res => {
      return res.genres.map(item => {
        return {label: item.name, value: item.id};
      })
    })
    .then(json => callback(null, {options: json, complete: false}))
    .catch(err => console.log(err));
};

export const getKeywords = (input='a', callback) => {
  api.request('/search/keyword', 'GET', {query: input})
    .then(res => {
      return res.results.map(item => {
        return {label: item.name, value: item.id};
      });
    })
    .then(json => callback(null, {options: json, complete: false}))
    .catch(err => console.log(err));
};

export const getActors = (input='', callback) => {
  api.request('/search/person', 'GET', {query: input})
    .then(res => {
      return res.results.map(item => {
        return {label: item.name, value: item.id};
      });
    })
    .then(json => callback(null, {options: json, complete: false}))
    .catch(err => console.log(err));
};
