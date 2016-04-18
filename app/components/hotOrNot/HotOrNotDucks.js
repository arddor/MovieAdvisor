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

export function addToHot(name) {
  return {type: ADDTOHOT, payload: name};
}

export function addToNot(name) {
  return {type: ADDTONOT, payload: name};
}
