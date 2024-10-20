import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const fetchSuggestedPlaces = createAsyncThunk('placesSuggestions/fetchSuggestedPlaces', async () => {
  const response = await axios.get(`${baseURL}places/suggested-places`);
  return response.data;
});

export const placesSuggestionsSlice = createSlice({
  name: 'placesSuggestions',
  initialState: {
    suggestions: [],
    lastFetched: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
      state.lastFetched = new Date().toISOString(); // Update the lastFetched time
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestedPlaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSuggestedPlaces.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestions = action.payload;
        state.lastFetched = new Date().toISOString(); // Update the lastFetched time
      })
      .addCase(fetchSuggestedPlaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSuggestions } = placesSuggestionsSlice.actions;

export default placesSuggestionsSlice.reducer;
