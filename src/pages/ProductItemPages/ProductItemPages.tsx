import style from './ProductItemPages.module.scss';
import ListProducts from '../../components/ListProducts';
import Gallery from './components/Gallery';
const pic = [
  'https://cdn.pixabay.com/photo/2017/10/03/07/01/sky-2811461_640.jpg',
  'https://russkiiyazyk.ru/wp-content/uploads/2018/06/Kartinka.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOksZKF2cQgmiFlVp__WB2sRwtnsQLqfhJQ&s',
];

const ProductItemPages = () => {
  return (
    <main className={style.main}>
      <div className={style.content}>
        <Gallery pictures={pic} />
        <div>
          <h1>{}</h1>
        </div>
      </div>
      <ListProducts title="Related Items" isShowCount={false} />
    </main>
  );
};

export default ProductItemPages;
