import { useGetProductsQuery } from '../../store/api';
import style from './ProductCatalog.module.scss';
import ProductCard from './components/ProductCard';
import { ProductCardProps, ProductCatalogProps } from '../../types/index.ts';
import Skeleton from './components/Skeleton/Skeleton.tsx';
import NotFoundPages from '../../pages/NotFoundPages/NotFoundPages.tsx';

const ProductCatalog = ({
  title,
  isShowCount = true,
  maxEl,
  filterList = null,
}: ProductCatalogProps) => {
  const {
    data: listProduct,
    isLoading,
    error,
  } = useGetProductsQuery(filterList);

  const listFormation = () => {
    if (!listProduct) return;

    if (typeof maxEl !== 'undefined') {
      const maxElList = Math.min(maxEl, listProduct.length);
      const arr = new Set<ProductCardProps>();

      while (arr.size < maxElList) {
        const randomItem =
          listProduct[Math.floor(Math.random() * listProduct.length)];
        arr.add(randomItem);
      }

      return [...arr];
    }

    return listProduct;
  };

  if (error && listProduct?.length) return <NotFoundPages />;
  if (isLoading) return <Skeleton />;

  return (
    <article>
      <h3
        className={style.text}
        data-count={isShowCount ? listProduct?.length : ''}
      >
        {title}
      </h3>
      <ul className={style.list}>
        {listFormation()?.map((product) => (
          <li key={product.id} className={style.listItems}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </article>
  );
};
export default ProductCatalog;
