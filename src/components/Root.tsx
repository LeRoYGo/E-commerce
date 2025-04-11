import { Link } from 'react-router';
import Header from './Header';

const Root = () => {
  return (
    <>
      <Header />
      <Link to="/products">Перейти в каталог</Link>
    </>
  );
};

export default Root;
