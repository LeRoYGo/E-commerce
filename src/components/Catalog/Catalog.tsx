import style from './Catalog.module.scss';
import type { CatalogProps } from '../../types';
import ProductCard from './components/ProductCard';

const Catalog = ({ listProducts, isShowCount, title }: CatalogProps) => {
  if (listProducts === undefined) return;
  return (
    <article>
      <h3
        className={style.text}
        data-count={isShowCount ? listProducts.length : ''}
      >
        {title}
      </h3>
      <ul className={style.list}>
        {listProducts.map((product) => (
          <li key={product.id} className={style.listItems}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </article>
  );
};
export default Catalog;
