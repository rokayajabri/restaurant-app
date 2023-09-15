import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getMeals = createAsyncThunk(
    "meals/getMeals",
    async () => {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
            return response.data;
        }
  );

const MenuSlice = createSlice({
    name: 'meals',
    initialState: {
      meals:[],
        loading:'idle',
        error:null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getMeals.pending, (state, action) => {
          if (state.loading === "idle") {
            state.loading = "pending";
          }
        });
        builder.addCase(getMeals.fulfilled, (state, action) => {
          if (state.loading === "pending") {
            state.meals = action.payload;
            state.loading = "idle";
          }
        });
        builder.addCase(getMeals.rejected, (state, action) => {
          if (state.loading === "pending") {
            state.loading = "idle";
            state.error = "Error occured";
          }
        });
      },
        
})
export default MenuSlice.reducer;