import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCategorie = createAsyncThunk(
    "categorie/getCategorie",  
    async () => {
            const response = await axios.get("http://localhost:5000/meals/category");
            return response.data;
        }
  );
const CategorieSlice = createSlice({
    name: 'categorie',
    initialState: {
        categorie:[],
        loading:'idle',
        error:null,
        selectedcategorie:'',
    },
    reducers: {
      addcategorie:(state, action) => {
        state.selectedcategorie = action.payload;
    },
    },
    extraReducers: (builder) => {
        builder.addCase(getCategorie.pending, (state, action) => {
          if (state.loading === "idle") {
            state.loading = "pending";
          }
        });
        builder.addCase(getCategorie.fulfilled, (state, action) => {
          if (state.loading === "pending") {
            state.categorie = action.payload;
            state.loading = "idle";
          }
        });
        builder.addCase(getCategorie.rejected, (state, action) => {
          if (state.loading === "pending") {
            state.loading = "idle";
            state.error = "Error occured";
          }
        });
      },
        
})
export default CategorieSlice.reducer;
export const { addcategorie} = CategorieSlice.actions;