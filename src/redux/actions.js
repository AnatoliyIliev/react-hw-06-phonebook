import types from './type';
import { v4 as uuidv4 } from 'uuid';

const addContacts = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
});

const deleteContacts = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts };
