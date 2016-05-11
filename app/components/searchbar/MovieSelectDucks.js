const UPDATEGENRE = 'movieadvisor/searchbar/updateGenre';
const UPDATEKEYWORD = 'movieadvisor/searchbar/updateKeyword';
const UPDATEACTOR = 'movieadvisor/searchbar/updateActor';

const initialState = {
  genres: [],
  keywords: [],
  actors: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATEGENRE:
      return {
        ...state,
        genres: [...action.payload]
      };

    case UPDATEKEYWORD:
      return {
        ...state,
        keywords: [...action.payload]
      };

    case UPDATEACTOR:
      return {
        ...state,
        actors: [...action.payload]
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

export function updateActor(actor) {
  return {type: UPDATEACTOR, payload: actor};
}
