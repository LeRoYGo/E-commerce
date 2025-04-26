import style from './ProductItemPages.module.scss';
import { useParams } from 'react-router';
import ListProducts from '../../components/ProductCatalog';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import Gallery from './components/Gallery';
import { useGetProductIdQuery } from '../../store/api';
import Skeleton from './components/Skeleton';
import NotFoundPages from '../NotFoundPages';

const ProductItemPages = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductIdQuery(productId ? productId.toString() : '');

  if (isLoading) {
    return (
      <main className={style.main}>
        <BackButton />
        <Skeleton />
        <ListProducts title="Related Items" isShowCount={false} />
      </main>
    );
  }
  if (error) return <NotFoundPages />;
  if (typeof product !== 'undefined') {
    return (
      <main className={style.main}>
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
              <Button
                style={{
                  color: 'rgba(0, 0, 0)',
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: '1px solid rgba(0, 0, 0)',
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </section>
        <ListProducts title="Related Items" isShowCount={false} maxEl={3} />
      </main>
    );
  }
};

export default ProductItemPages;
