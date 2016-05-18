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

export const getKeywords = (input='', callback) => {
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

export const discover = (genres=null, keywords=null) => {
  let g = genres ? genres.map(item => item.value).join() : null;
  let k = keywords ? keywords.map(item => item.value).join() : null;
  return api.request('/discover/movie', 'GET', {with_genres: g, with_keywords: k})
    .then(res => res)
};

export const getVideos = (id, language='en') => {
  return api.request(`/movie/${id}/videos`, 'GET', {language})
};

export const getMovieKeywords = (id, language='en') => {
  return api.request(`/movie/${id}/keywords`, 'GET', {language})

};



export const discoverWithVideo = (genres=null, keywords=null) => {
  return discover(genres, keywords)
    .then(res => {
      return Promise.all(
        res.results.map(item => getVideos(item.id)
          .then(videos => videos.results[0])
        )
      ).then(list => {
        return {
          ...res,
          results: res.results.map((item, index) => {
            item.youtube = list[index];
            return item;
          })
        }
      })
    })
};
