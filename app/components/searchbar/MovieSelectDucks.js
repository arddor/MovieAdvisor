const UPDATEGENRE = 'movieadvisor/searchbar/updateGenre';
const UPDATEKEYWORD = 'movieadvisor/searchbar/updateKeyword';


const initialState = {
  genre: '',
  keyword: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATEGENRE:
      return {
        ...state,
        genre: action.payload
      };

    case UPDATEKEYWORD:
      return {
        ...state,
        keyword: action.payload
      };

    default:
      return state;
  }
}

export function updateGenre(genre) {
  return {type: UPDATEGENRE, payload: genre};
}

export function updateKeyword(keyword) {
  return {type: UPDATEKEYWORD, payload: keyword};
}
