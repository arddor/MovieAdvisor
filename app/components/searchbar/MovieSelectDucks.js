const UPDATEGENRE = 'movieadvisor/searchbar/updateGenre';
const UPDATEKEYWORD = 'movieadvisor/searchbar/updateKeyword';
const UPDATEACTOR = 'movieadvisor/searchbar/updateActor';
const UPDATEYEARRANGE = 'movieadvisor/searchbar/updateYearRange';

const initialState = {
  genres: [],
  keywords: [],
  actors: [],
  yearRange: {
    min: 2010,
    max: 2016
  }
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

    case UPDATEYEARRANGE:
      return {
        ...state,
        yearRange: action.payload
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

export function updateYearRange(years){
  return {type: UPDATEYEARRANGE, payload: years}
}
