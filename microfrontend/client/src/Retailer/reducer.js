import { INCREMENT, DECREMENT } from './actionTypes';

const initialState = {
  hello: 'world',
  count: 0,
};

export default function retailerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: (state.count += 1) };
    case DECREMENT:
      return { ...state, count: (state.count -= 1) };
    default:
      return state;
  }
}
