import { createSlice } from '@reduxjs/toolkit';

export const placesSlice = createSlice({
  name: 'places',
  initialState: [
    { id: 1, name: 'Pyramids of Giza', image: 'url', description: 'Ancient pyramids in Egypt.', visited: false },
    { id: 2, name: 'Great Wall of China', image: 'url', description: 'Historic wall in China.', visited: false },
    // Add more places as needed
  ],
  reducers: {
    markVisited: (state, action) => {
      const place = state.find(p => p.id === action.payload);
      if (place) {
        place.visited = !place.visited;
      }
    },
  },
});

export const { markVisited } = placesSlice.actions;

export default placesSlice.reducer;
