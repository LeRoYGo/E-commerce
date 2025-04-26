import { Outlet } from 'react-router';
import Header from './components/Header';
import { useScrollToTop } from './hook/useScrollToTop.ts';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {useScrollToTop()}
    </>
  );
};

export default App;
