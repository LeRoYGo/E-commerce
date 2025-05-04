import App from '../App';
import ProductsPages from '../pages/ProductsPages';
import ProductItemPages from '../pages/ProductItemPages';
import Redirection from '../components/Redirection';
import FavoritesPages from '../pages/FavoritesPages';
import NotFoundPages from '../pages/NotFoundPages';

export const enum PATHS {
  main = '/',
  products = '/products',
  productId = ':productId',
  favorites = '/favorites',
  aboutUs = '/about-us',
  notFound = '*',
}

export const router = [
  {
    path: PATHS.main,
    Component: App,
    children: [
      { index: true, Component: Redirection }, // редирект на /products
    ],
  },
  {
    path: PATHS.products,
    Component: App,
    children: [
      { index: true, Component: ProductsPages },
      { path: PATHS.productId, Component: ProductItemPages },
    ],
  },
  {
    path: PATHS.favorites,
    Component: App,
    children: [{ index: true, Component: FavoritesPages }],
  },
  {
    path: PATHS.aboutUs,
    Component: App,
    children: [{ index: true, Component: NotFoundPages }],
  },
  {
    path: PATHS.notFound,
    Component: App,
    children: [{ index: true, Component: NotFoundPages }],
  },
];
