import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { router } from './configs/routes';
import './styles/index.css';
import './styles/normalize.css';

const routers = createBrowserRouter(router);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
);
