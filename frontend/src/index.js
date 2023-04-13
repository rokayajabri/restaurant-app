import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import homeReducer from './redux/HomeSlice';
import { BrowserRouter } from 'react-router-dom';
import PromoReducer from './redux/PromoSlice';
import CategorieReducer from './redux/CategorieSlice';
import MenuReducer from './redux/MenuSlice'
const store = configureStore({
  reducer: {
    home: homeReducer,
    promo:PromoReducer,
    categorie:CategorieReducer,
    menu:MenuReducer
  }
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
