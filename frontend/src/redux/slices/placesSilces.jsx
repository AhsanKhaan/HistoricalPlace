import { createSlice } from '@reduxjs/toolkit';

export const placesSlice = createSlice({
  name: 'places',
  initialState: [
    { id: 1, name: 'Pyramids of Giza', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Ancient pyramids in Egypt.', visited: false },
    { id: 2, name: 'Great Wall of China', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Historic wall in China.', visited: false },
    { id: 3, name: 'Taj Mahal', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Marble mausoleum in India.', visited: false },
    { id: 4, name: 'Christ the Redeemer', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Giant Art Deco statue in Brazil.', visited: false },
    { id: 5, name: 'The Great Barrier Reef', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Largest coral reef system in Australia.', visited: false },
    { id: 6, name: 'The Acropolis of Athens', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Ancient citadel in Greece.', visited: false },
    { id: 7, name: 'The Eiffel Tower', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Iron lattice tower in France.', visited: false },
    { id: 8, name: 'Circus', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Historic Cirus.', visited: true },
    { id: 9, name: 'Monument Meusum', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Historic monument Muesum.', visited: false },
    { id: 10, name: 'Shakar pariyan', image: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg', description: 'Sharsasas.', visited: false },
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
