import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './type';

const items = createReducer([], {
  [types.ADD]: (state = [], { payload }) => [...state, payload],
  [types.DELETE]: (state = [], { payload }) =>
    state.filter(contact => contact.id !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
