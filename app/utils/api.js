import apiConfig from './MovieDBConfig';
import TmdbApi from 'moviedb-api';

var api = new TmdbApi({
  consume: false,
  apiKey: apiConfig.apiKey
});

const makeAndList = (list) => {
  return list.map(item => item.value).join();
};


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

export const discover = (genres=null, keywords=null, actors, minYear, maxYear, page=1) => {
  let g = genres ? makeAndList(genres) : null;
  let k = keywords ? makeAndList(keywords) : null;
  let a = actors ? makeAndList(actors) : null;
  return api.request('/discover/movie', 'GET', {
    with_genres: g,
    with_keywords: k,
    with_cast: a,
    "release_date.gte": minYear,
    "release_date.lte": maxYear,
    page
  })
    .then(res => res)
};

export const getVideos = (id, language='en') => {
  return api.request(`/movie/${id}/videos`, 'GET', {language})
};

export const getMovieKeywords = (id, language='en') => {
  return api.request(`/movie/${id}/keywords`, 'GET', {language})

};



export const discoverWithVideo = (genres=null, keywords=null, actors, minYear, maxYear) => {
  return discover(genres, keywords, actors, minYear, maxYear)
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

export const getDetails = (id, language='en') => {
  return api.request(`/movie/${id}`, 'GET', {language, append_to_response: "keywords,videos"})
};
