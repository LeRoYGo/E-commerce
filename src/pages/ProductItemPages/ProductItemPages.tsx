import style from './ProductItemPages.module.scss';
import { useParams } from 'react-router';
import ListProducts from '../../components/ProductCatalog';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import Gallery from './components/Gallery';
import { useGetProductIdQuery } from '../../store/api';
import Skeleton from './components/Skeleton';
import NotFoundPages from '../NotFoundPages';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addItem, deleteItem } from '../../store/favoritesSlice';
import { useScrollToTop } from '../../hook/useScrollToTop';

const ProductItemPages = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductIdQuery(productId ? productId : '');
  const listFavorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  useScrollToTop();

  if (isLoading) {
    return (
      <>
        <BackButton />
        <Skeleton />
        <ListProducts title="Related Items" isShowCount={false} />
      </>
    );
  }

  if (error) return <NotFoundPages />;
  if (product === undefined) return;

  return (
    <>
      <BackButton />
      <section className={style.wrapper}>
        <article className={style.wrapperGallery}>
          <Gallery pictures={product.images} />
        </article>
        <div className={style.product}>
          <h1 className={style.name}>{product.title}</h1>
          <p className={style.description}>{product.description}</p>
          <span className={style.price}>${product.price}</span>
          <div className={style.btnBox}>
            <Button>Buy Now</Button>
            {listFavorites.includes(product) ? (
              <Button
                onClick={() => dispatch(deleteItem(product))}
                style={{
                  color: 'rgba(0, 0, 0)',
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '1px solid rgba(0, 0, 0)',
                }}
              >
                Delete from favorites
              </Button>
            ) : (
              <Button
                onClick={() => dispatch(addItem(product))}
                style={{
                  color: 'rgba(0, 0, 0)',
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '1px solid rgba(0, 0, 0)',
                }}
              >
                Add to favorites
              </Button>
            )}
          </div>
        </div>
      </section>
      <ListProducts title="Related Items" isShowCount={false} maxEl={3} />
    </>
  );
};

export default ProductItemPages;
