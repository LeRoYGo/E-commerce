import style from './ListProducts.module.scss';
import ProductCard from '../ProductCard';

const listProduct = [
  {
    id: 1,
    img: 'https://i.ibb.co/8gMt7chT/Rectangle-23.jpg',
    name: 'White Aesthetic Chair',
    description: 'erffeff',
    price: 312,
    category: 'Chair',
  },
  {
    id: 2,
    img: 'https://i.ibb.co/8gMt7chT/Rectangle-23.jpg',
    name: 'White Aesthetic Chair',
    description: 'erffeff',
    price: 312,
    category: 'Chair',
  },
  {
    id: 3,
    img: 'https://i.ibb.co/8gMt7chT/Rectangle-23.jpg',
    name: 'White Aesthetic Chair',
    description: 'erffeff',
    price: 312,
    category: 'Chair',
  },
  {
    id: 4,
    img: 'https://i.ibb.co/8gMt7chT/Rectangle-23.jpg',
    name: 'White Aesthetic Chair',
    description: 'erffeff',
    price: 312,
    category: 'Chair',
  },
  {
    id: 5,
    img: 'https://i.ibb.co/8gMt7chT/Rectangle-23.jpg',
    name: 'White Aesthetic Chair',
    description: 'erffeff',
    price: 312,
    category: 'Chair',
  },
  {
    id: 6,
    img: 'https://i.ibb.co/8gMt7chT/Rectangle-23.jpg',
    name: 'White Aesthetic Chair',
    description: 'erffeff',
    price: 312,
    category: 'Chair',
  },
  {
    id: 7,
    img: 'https://i.ibb.co/8gMt7chT/Rectangle-23.jpg',
    name: 'White Aesthetic Chair',
    description: 'erffeff',
    price: 312,
    category: 'Chair',
  },
];

const ListProducts = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.text}>Total products</span>
      <ul className={style.list}>
        {listProduct.map((product) => (
          <li key={product.id} className={style.listItems}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListProducts;
