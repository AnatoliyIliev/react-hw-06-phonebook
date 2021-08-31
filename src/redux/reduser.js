import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const items = createReducer([], {
  [actions.addContacts]: (state, { payload }) => {
    const repeatСontact = state.some(contact => contact.name === payload.name);
    if (repeatСontact) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }

    return [...state, payload];
  },

  [actions.deleteContacts]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
