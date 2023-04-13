
import { createSlice } from '@reduxjs/toolkit';

const PromoSlice = createSlice({
  name: 'promotions',
  initialState: { data: [ 
    {
      time: ['9:00 AM - 12:00 PM','9:00 AM - 12:00 PM','15:00 - 17:00','18:00 - 20:00','9:00 AM - 12:00 PM'],
      monday:['Breakfast time','Discount 10%'],
      tuesday: ['Happy Lunch','Free Drink'],
      wednesday: ['Afternoon Snack','Discount 20% Nachos & Dessert'],
      thursday: ['Happy Dinner','Discount 15%'],
      
    },
  ] },
  reducers: {
  },
}); 

export default PromoSlice.reducer
