const ADD = 'movieadvisor/hello/ADD';


const initialState = {
  name: 'Test',
  list: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    default: return state;
  }
}

export function add() {
  return { type: ADD, payload: 'test'};
}
