/**
 * The above code snippet defines a Redux Observable epic that listens for a specific action type and
 * maps it to another action type, and then combines all epics into a root epic using Redux-Observable.
 * @param action$ - The `action$` parameter in the `markVisitedEpic` function is an Observable stream
 * of actions dispatched in your Redux application. It represents a stream of all actions that are
 * flowing through your Redux application. In the `redux-observable` library, the `$` suffix
 * conventionally denotes that a
 */
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { markVisited } from './slices/placesSlice';

// Define your epics
const markVisitedEpic = (action$) => action$.pipe(
    ofType(markVisited.type),
    map(() => ({ type: 'MARK_VISITED_SUCCESS' }))  // Uses map correctly with a function
  );

// Combine all epics into a root epic
export const rootEpic = combineEpics(
  markVisitedEpic,
  // Add more epics here
);

// Create epic middleware
export const epicMiddleware = createEpicMiddleware();


