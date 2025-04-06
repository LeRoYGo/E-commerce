import { createBrowserRouter } from 'react-router';

import App from '../App';
import ProductsPages from '../pages/ProductsPages';
import ProductsItemPages from '../pages/ProductsItemPages';
import Root from '../components/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
  },
  {
    path: '/products',
    Component: App,
    children: [
      { index: true, Component: ProductsPages },
      { path: ':productId', Component: ProductsItemPages },
    ],
  },
]);
