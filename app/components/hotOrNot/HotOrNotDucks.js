const ADDTOHOT = 'movieadvisor/hotOrNot/ADDTOHOT';
const ADDTONOT = 'movieadvisor/hotOrNot/ADDTONOT';


const initialState = {
  name: 'Test',
  hotlist: [],
  notlist: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADDTOHOT:
      return {
        ...state,
        hotlist: [...state.hotlist, action.payload]
      };
    case ADDTONOT:
      return {
        ...state,
        notlist: [...state.notlist, action.payload]
      };

    default:
      return state;
  }
}

export function addToHot(movieObj) {
  return {type: ADDTOHOT, payload: movieObj};
}

export function addToNot(movieObj) {
  return {type: ADDTONOT, payload: movieObj};
}
