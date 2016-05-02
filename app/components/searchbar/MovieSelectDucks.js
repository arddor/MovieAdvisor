const UPDATEGENRE = 'movieadvisor/searchbar/updateGenre';
const UPDATEKEYWORD = 'movieadvisor/searchbar/updateKeyword';


const initialState = {
  genres: [],
  keywords: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATEGENRE:
      return {
        ...state,
        genres: [...state.genres, action.payload]
      };

    case UPDATEKEYWORD:
      return {
        ...state,
        keywords: [...state.keywords, action.payload]
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
