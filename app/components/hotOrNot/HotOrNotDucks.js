const ADDTOHOT = 'movieadvisor/hotOrNot/ADDTOHOT';
const ADDTONOT = 'movieadvisor/hotOrNot/ADDTONOT';
const CLEAR = 'movieadvisor/hotOrNot/CLEAR';
const REMOVE = 'movieadvisor/hotOrNot/REMOVE';


const initialState = {
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
    case CLEAR:
      return {
        ...state,
        hotlist: []
      };

    case REMOVE:
      return {
        ...state,
        hotlist: [...state.hotlist.slice(0, action.payload),
          ...state.hotlist.slice(action.payload + 1)]
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

export function clearHotlist(movieObj) {
  return {type: CLEAR};
}

export function removeFromHotlist(index) {
  return {type: REMOVE, payload: index};
}
