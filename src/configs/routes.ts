import { createBrowserRouter } from 'react-router';
import ProductsPages from '../pages/ProductsPages';
import ProductsItemPages from '../pages/ProductsItemPages';
import App from '../App';

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
