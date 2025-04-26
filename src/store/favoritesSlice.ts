import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavoritesList, ProductCardProps } from '../types';

const initialState: FavoritesList = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductCardProps>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = favoritesSlice.actions;

export default favoritesSlice.reducer;
