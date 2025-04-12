import style from './ProductsPages.module.scss';
import ListProducts from '../../components/ListProducts';
import FilterSelect from '../../components/FilterSelect';

const ProductsPages = () => {
  return (
    <main className={style.main}>
      <h1 className={style.title}>Products</h1>
      <p className={style.slogan}>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <FilterSelect />
      <ListProducts />
    </main>
  );
};

export default ProductsPages;
