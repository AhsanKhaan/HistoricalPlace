import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchPlaces = createAsyncThunk('places/fetchPlaces', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      const response = await axios.get(`${baseURL}places`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        attempts += 1;
        const waitTime = Math.pow(2, attempts) * 1000; //This Logic is applies due to Multiple Header Request Fixes For unsplash API
        await delay(waitTime);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }

  return rejectWithValue('Rate limit exceeded. Please try again later.');
});

export const placesSlice = createSlice({
  name: 'places',
  initialState: {
    places: [],
    loading: false,
    error: null,
    lastFetched: null, // Add lastFetched to the initial state
  },
  reducers: {
    markVisited: (state, action) => {
      const place = state.places.find((p) => p.id === action.payload);
      if (place) {
        place.visited = !place.visited;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.loading = false;
        state.places = action.payload;
        state.lastFetched = Date.now(); // Update lastFetched on successful fetch
      })
      .addCase(fetchPlaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { markVisited } = placesSlice.actions;

export default placesSlice.reducer;
