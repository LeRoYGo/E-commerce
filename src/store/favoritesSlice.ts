import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavoritesList, ProductCardProps } from '../types';

const FAVORITES_KEY = 'favorites';

const saveFavoritesToLocalStorage = (favorites: ProductCardProps[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = (): ProductCardProps[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

const initialState: FavoritesList = loadFavoritesFromLocalStorage();

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductCardProps>) => {
      state.push(action.payload);
      saveFavoritesToLocalStorage(state);
    },
    deleteItem: (state, action: PayloadAction<ProductCardProps>) => {
      const temp = state.filter((obj) => obj.id !== action.payload.id);
      saveFavoritesToLocalStorage(temp);
      return temp;
    },
  },
});

export const { addItem, deleteItem } = favoritesSlice.actions;

export default favoritesSlice.reducer;
