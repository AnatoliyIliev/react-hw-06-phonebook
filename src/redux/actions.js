import types from './type';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContacts = createAction(types.ADD, (name, number) => ({
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
}));

// const addContacts = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   },
// });

const deleteContacts = createAction(types.DELETE);

// const deleteContacts = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const changeFilter = createAction(types.CHANGE_FILTER);

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts, changeFilter };
