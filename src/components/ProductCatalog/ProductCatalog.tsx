import { useGetProductsQuery } from '../../store/api';
import style from './ProductCatalog.module.scss';
import ProductCard from './components/ProductCard';
import { ProductCatalogProps } from '../../types/index.ts';
import Skeleton from './components/Skeleton/Skeleton.tsx';

const ProductCatalog = ({ title, isShowCount = true }: ProductCatalogProps) => {
  const { data: listProduct, isLoading } = useGetProductsQuery('Products');

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className={style.wrapper}>
      <span
        className={style.text}
        data-count={isShowCount ? listProduct?.length : ''}
      >
        {title}
      </span>
      <ul className={style.list}>
        {listProduct?.map((product) => (
          <li key={product.id} className={style.listItems}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductCatalog;
