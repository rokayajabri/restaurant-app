import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHomeData = createAsyncThunk(
  'home/fetchData',
  async () => {
    const response = await fetch('/api/home');
    if (!response.ok) {
      throw new Error('Failed to fetch home data');
    }
    const data = await response.json();
    return data;
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    scrollToTop(state, action) {
      window.scrollTo(0, 0);
    },
  },
});
export const { scrollToTop } = homeSlice.actions;
export default homeSlice.reducer;
