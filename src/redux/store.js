import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: countriesReducer,
});

export default store;
