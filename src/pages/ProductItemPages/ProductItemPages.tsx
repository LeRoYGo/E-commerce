import style from './ProductItemPages.module.scss';
import ListProducts from '../../components/ProductCatalog';
import Gallery from './components/Gallery';
import Button from '../../components/Button';
import arrow from '../../assets/Arrow.svg';
import { useNavigate } from 'react-router';

const pic = [
  'https://cdn.pixabay.com/photo/2017/10/03/07/01/sky-2811461_640.jpg',
  'https://russkiiyazyk.ru/wp-content/uploads/2018/06/Kartinka.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOksZKF2cQgmiFlVp__WB2sRwtnsQLqfhJQ&s',
];

const ProductItemPages = () => {
  const navigate = useNavigate();
  return (
    <main className={style.main}>
      <button onClick={() => navigate(-1)} className={style.wrappBack}>
        <img src={arrow} alt="" />
        <span>Back</span>
      </button>
      <div className={style.wrapper}>
        <div className={style.wrapperGallery}>
          <Gallery pictures={pic} />
        </div>
        <div className={style.content}>
          <h1 className={style.nameProduct}>White Aesthetic Chair</h1>
          <p className={style.descriptionProduct}>
            Ergonomic executive chair upholstered in bonded black leather and
            PVC padded seat and back for all-day comfort and support
          </p>
          <span className={style.priceProduct}>$99.98</span>
          <div className={style.btnBox}>
            <Button text="Buy Now" />
            <Button
              text="Add to Cart"
              style={{
                color: 'rgba(0, 0, 0)',
                backgroundColor: 'rgb(255, 255, 255)',
                border: '1px solid rgba(0, 0, 0)',
              }}
            />
          </div>
        </div>
      </div>
      <ListProducts title="Related Items" isShowCount={false} />
    </main>
  );
};

export default ProductItemPages;
