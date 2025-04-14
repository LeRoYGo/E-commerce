import style from './ProductCard.module.scss';
import Button from '../../../Button';
import { Link } from 'react-router';

type ProductCardProps = {
  id: string | number;
  img: string;
  name: string;
  description: string;
  category: string;
  price: number;
};

const ProductCard = (props: ProductCardProps) => {
  const { id, img, name, description, category, price } = props;
  return (
    <Link to={'/products/' + id} className={style.card}>
      <img src={img} alt={name} />
      <div className={style.wrapper}>
        <div className={style.blockText}>
          <span>{category}</span>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={style.box}>
          <span>{`$${price}`}</span>
          <Button text="Add to Cart" />
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
