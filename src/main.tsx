import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { router } from './configs/routes';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
import './styles/index.css';
import './styles/normalize.css';

const routers = createBrowserRouter(router);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </StrictMode>,
);
