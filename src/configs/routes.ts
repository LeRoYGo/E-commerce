import App from '../App';
import ProductsPages from '../pages/ProductsPages';
import ProductItemPages from '../pages/ProductItemPages';
import Redirection from '../components/Redirection';
import FavoritesPages from '../pages/FavoritesPages';
import NotFoundPages from '../pages/NotFoundPages';

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
  {
    Component: App,
    path: '/favorites',
    children: [{ index: true, Component: FavoritesPages }],
  },
  {
    path: '*',
    Component: NotFoundPages,
  },
];
