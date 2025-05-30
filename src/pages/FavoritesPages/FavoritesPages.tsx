import BackButton from '../../components/BackButton';
import Catalog from '../../components/Catalog';
import { useAppSelector } from '../../store/hooks';

const FavoritesPages = () => {
  const listProducts = useAppSelector((state) => state.favorites);
  return (
    <>
      <BackButton />
      <Catalog listProducts={listProducts} isShowCount title="Favorites" />
    </>
  );
};
export default FavoritesPages;
