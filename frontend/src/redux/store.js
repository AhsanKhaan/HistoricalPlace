
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { epicMiddleware } from './epics';


/**
 * It sets up the reducer and middleware for the store.
 */
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
});


export default store;

