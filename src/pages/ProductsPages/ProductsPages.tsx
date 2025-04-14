import style from './ProductsPages.module.scss';
import ListProducts from '../../components/ListProducts';
import FilterSelect from './components/FilterSelect';
import SearchInput from './components/SearchInput';

const ProductsPages = () => {
  return (
    <main className={style.main}>
      <h1 className={style.title}>Products</h1>
      <p className={style.slogan}>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
      <div className={style.wrapper}>
        <SearchInput />
        <FilterSelect />
      </div>
      <ListProducts title="Total products" />
    </main>
  );
};

export default ProductsPages;
