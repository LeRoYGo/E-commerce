import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './favoritesSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
