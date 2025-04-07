import Button from '../../components/Button';
import Header from '../../components/Header';

const ProductsPages = () => {
  const hendleClice = () => {
    console.log('Кнопка');
  };
  return (
    <div>
      <Header />
      <Button text="Кнопка" onClick={hendleClice} />
    </div>
  );
};

export default ProductsPages;
