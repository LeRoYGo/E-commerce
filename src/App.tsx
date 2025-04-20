import { Outlet } from 'react-router';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
    </>
  );
};

export default App;
