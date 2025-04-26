import style from './ProductsPages.module.scss';
import ListProducts from '../../components/ProductCatalog';
import FilterSelect from './components/FilterSelect';
import SearchInput from './components/SearchInput';
import { useSearchParams } from 'react-router';
import { Filter } from '../../types';

const ProductsPages = () => {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get('category');
  const titleName = searchParams.get('title');
  const filter: Filter = {
    title: titleName,
    categorySlug: categorySlug,
  };
  const filterList: string[] = [];
  Object.entries(filter).forEach(([key, value]) => {
    if (value !== null) filterList.push(`${key}=${value}`);
  });

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
        <ListProducts
          title="Total products:"
          filterList={filterList.join('&')}
        />
      </div>
    </main>
  );
};

export default ProductsPages;
