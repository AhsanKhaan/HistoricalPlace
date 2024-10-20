/* This code snippet is setting up the root reducer for a Redux store in a JavaScript application using
Redux Toolkit. */
import { combineReducers } from '@reduxjs/toolkit';
import placesReducer from './slices/placesSilces.jsx';
import placesSuggestionsReducer from './slices/placesSuggesions.jsx';

const rootReducer = combineReducers({
  places: placesReducer,
  suggestedPlaces: placesSuggestionsReducer
});

export default rootReducer;
