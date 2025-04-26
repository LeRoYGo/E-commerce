import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category, ProductCardProps } from '../types';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Products', 'Product', 'Categories'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1/',
    // prepareHeaders: (headers) => {
    //   headers.set('Content-Type', 'text/json');
    //   headers.set('X-Content-Type-Options', 'nosniff');
    // },
  }),
  endpoints: (build) => ({
    getProducts: build.query<ProductCardProps[], string | null>({
      query: (filter) => {
        if (filter) {
          return `/products/?${filter}`;
        }
        return '/products';
      },
    }),
    getProductId: build.query<ProductCardProps, string>({
      query: (productId) => `products/${productId}`,
    }),
    getCategories: build.query<Category[], null>({
      query: () => `categories`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductIdQuery,
  useGetCategoriesQuery,
} = api;
