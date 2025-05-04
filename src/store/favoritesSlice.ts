import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavoritesList, ProductCardProps } from '../types';

const initialState: FavoritesList = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductCardProps>) => {
      state.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<ProductCardProps>) => {
      return state.filter((obj) => obj.id !== action.payload.id);
    },
  },
});

export const { addItem, deleteItem } = favoritesSlice.actions;

export default favoritesSlice.reducer;
