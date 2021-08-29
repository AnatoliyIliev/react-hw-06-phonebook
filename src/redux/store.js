import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import ContactReduser from './reduser';
import reduser from './reduser';

const rootReduser = combineReducers({
  contacts: reduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
