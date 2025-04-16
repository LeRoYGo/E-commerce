import App from '../App';
import ProductsPages from '../pages/ProductsPages';
import ProductItemPages from '../pages/ProductItemPages';
import Redirection from '../components/Redirection';

export const router = [
  {
    path: '/',
    Component: Redirection,
  },
  {
    path: '/products',
    Component: App,
    children: [
      { index: true, Component: ProductsPages },
      { path: ':productId', Component: ProductItemPages },
    ],
  },
];
