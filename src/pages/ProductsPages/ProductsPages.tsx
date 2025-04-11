import style from './ProductsPages.module.scss';
import ListProducts from '../../components/ListProducts';

const ProductsPages = () => {
  return (
    <main className={style.main}>
      <h1>style</h1>
      <p>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <ListProducts />
    </main>
  );
};

export default ProductsPages;
