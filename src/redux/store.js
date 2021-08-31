import { configureStore } from '@reduxjs/toolkit';
import reduser from './reduser';

const store = configureStore({
  reducer: {
    contacts: reduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
