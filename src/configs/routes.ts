import App from '../App';
import ProductsPages from '../pages/ProductsPages';
import ProductItemPages from '../pages/ProductItemPages';
import Root from '../components/Root';

export const router = [
  {
    path: '/',
    Component: Root,
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
