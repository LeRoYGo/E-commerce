import style from './ProductCard.module.scss';
import Button from '../../../Button';
import { Link } from 'react-router';
import { ProductCardProps } from '../../../../types/index.ts';

const ProductCard = (props: ProductCardProps) => {
  const { id, images, title, description, category, price } = props;

  return (
    <Link to={`/products/${id}`} className={style.card}>
      <img src={images[0]} alt={title} />
      <div className={style.wrapper}>
        <div className={style.blockText}>
          <span>{category.name}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style.box}>
          <span>{'$' + price}</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
