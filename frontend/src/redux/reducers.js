/* This code snippet is setting up the root reducer for a Redux store in a JavaScript application using
Redux Toolkit. */
import { combineReducers } from '@reduxjs/toolkit';
import placesReducer from './slices/placesSlice';

const rootReducer = combineReducers({
  places: placesReducer,
});

export default rootReducer;
