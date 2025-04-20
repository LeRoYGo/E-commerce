import style from './ProductItemPages.module.scss';
import { useParams } from 'react-router';
import ListProducts from '../../components/ProductCatalog';
import Button from '../../components/Button';
import BackButton from './components/BackButton';
import Gallery from './components/Gallery';
import { useGetProductIdQuery } from '../../store/api';
import Skeleton from './components/Skeleton';

const ProductItemPages = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useGetProductIdQuery(
    productId as string,
  );

  if (isLoading) {
    return (
      <main className={style.main}>
        <BackButton />
        <Skeleton />
        <ListProducts title="Related Items" isShowCount={false} />
      </main>
    );
  }

  if (typeof product !== 'undefined') {
    return (
      <main className={style.main}>
        <BackButton />
        <div className={style.wrapper}>
          <div className={style.wrapperGallery}>
            <Gallery pictures={product.images} />
          </div>
          <div className={style.content}>
            <h1 className={style.nameProduct}>{product.title}</h1>
            <p className={style.descriptionProduct}>{product.description}</p>
            <span className={style.priceProduct}>${product.price}</span>
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
        </div>
        <ListProducts title="Related Items" isShowCount={false} />
      </main>
    );
  }
};

export default ProductItemPages;
