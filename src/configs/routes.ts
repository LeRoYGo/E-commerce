import App from '../App';
import ProductsPages from '../pages/ProductsPages';
import ProductItemPages from '../pages/ProductItemPages';
import Redirection from '../components/Redirection';
import FavoritesPages from '../pages/FavoritesPages';
import NotFoundPages from '../pages/NotFoundPages';

export const enum PATHS {
  main = '/',
  products = '/products',
  products_productId = ':productId',
  favorites = '/favorites',
  aboutUs = '/about-us',
  notFoundPages = '*',
}

export const router = [
  {
    path: PATHS.main,
    Component: Redirection,
  },
  {
    path: PATHS.products,
    Component: App,
    children: [
      { index: true, Component: ProductsPages },
      { path: PATHS.products_productId, Component: ProductItemPages },
    ],
  },
  {
    Component: App,
    path: PATHS.favorites,
    children: [{ index: true, Component: FavoritesPages }],
  },
  {
    path: PATHS.notFoundPages,
    Component: NotFoundPages,
  },
];
