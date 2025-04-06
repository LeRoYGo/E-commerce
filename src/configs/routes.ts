import { createBrowserRouter } from 'react-router';

import App from '../App';
import ProductsPages from '../pages/ProductsPages';
import ProductsItemPages from '../pages/ProductsItemPages';

export const router = createBrowserRouter([
  {
    path: '/products',
    Component: App,
    children: [
      { index: true, Component: ProductsPages },
      { path: ':productId', Component: ProductsItemPages },
    ],
  },
]);
