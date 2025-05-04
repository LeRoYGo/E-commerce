import { Navigate } from 'react-router';
import { PATHS } from '../configs/routes';

const Redirection = () => {
  return <Navigate to={PATHS.products} replace />;
};

export default Redirection;
