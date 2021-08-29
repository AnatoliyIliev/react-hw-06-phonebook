import { combineReducers } from 'redux';
import types from './type';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// };

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', actions) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
