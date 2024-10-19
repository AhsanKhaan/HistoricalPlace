/* This code snippet is defining a Redux action type `MARK_VISITED` and an action creator function
`markVisited`. */
export const MARK_VISITED = 'MARK_VISITED';

export const markVisited = id => ({
  type: MARK_VISITED,
  payload: id,
});
