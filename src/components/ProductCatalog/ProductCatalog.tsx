import { useGetProductsQuery } from '../../store/api';
import style from './ProductCatalog.module.scss';
import ProductCard from './components/ProductCard';
import { ProductCardProps, ProductCatalogProps } from '../../types/index.ts';
import Skeleton from './components/Skeleton/Skeleton.tsx';

const ProductCatalog = ({
  title,
  isShowCount = true,
  maxEl,
  categorySlug = null,
}: ProductCatalogProps) => {
  const { data: listProduct, isLoading } = useGetProductsQuery(categorySlug);

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
        {listFormation()?.map((product) => (
          <li key={product.id} className={style.listItems}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductCatalog;
