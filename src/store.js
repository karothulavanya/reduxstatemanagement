import {legacy_createStore as createStore} from "redux"

// Initial State
const initialState = {
  count: 0,
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create Store
const store = createStore(counterReducer);

export default store;
