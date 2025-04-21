import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category, ProductCardProps } from '../types';

export const api = createApi({
  reducerPath: 'api',
  // tagTypes: ['Products', 'Product', 'Categories'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1/',
  }),
  endpoints: (build) => ({
    getProducts: build.query<ProductCardProps[], string>({
      query: () => `products`,
    }),
    // getProductsByCategory: build.query<ProductCardProps[], string>({
    //   query: (categorySlug) => `products/?categorySlug=${categorySlug}`,
    // }),
    getProductId: build.query<ProductCardProps, string>({
      query: (productId) => `products/${productId}`,
    }),
    getCategories: build.query<Category[], string>({
      query: () => `categories`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductIdQuery,
  useGetCategoriesQuery,
  // useGetProductsByCategoryQuery,
} = api;
