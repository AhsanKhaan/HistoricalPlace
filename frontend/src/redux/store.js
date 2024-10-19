
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';


/**
 * It sets up the reducer and middleware for the store.
 */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createEpicMiddleware),
});


export default store;

