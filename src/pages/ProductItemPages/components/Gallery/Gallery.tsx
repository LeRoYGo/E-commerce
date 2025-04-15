import { useRef } from 'react';
import style from './Gallery.module.scss';
import arrow from '../../../../assets/Arrow.svg';

type GalleryProps = {
  pictures: string[];
};

const defaultImg = 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png';

const Gallery = ({ pictures }: GalleryProps) => {
  const ref = useRef<null | HTMLDivElement>(null);
  let currentIndex = 0;

  const goToSlide = (index: number) => {
    if (ref.current !== null) {
      if (index < 0) {
        index = pictures.length - 1; // Если текущий слайд первый, переходим на последний
      } else if (index >= pictures.length) {
        index = 0; // Если текущий слайд последний, переходим на первый
      }

      currentIndex = index; // Запоминаем текущий индекс
      ref.current.style.transform = `translateX(${-index * 100}%)`; // Смещаем контейнер слайдов
    }
  };

  const handleNextClick = () => {
    goToSlide(currentIndex + 1);
  };
  const handlePrevClick = () => {
    goToSlide(currentIndex - 1);
  };

  if (!pictures.length) {
    return (
      <div className={style.wrapper}>
        <div className={style.listImg}>
          <img src={defaultImg} alt="default img" />
        </div>
      </div>
    );
  }
  return (
    <div className={style.wrapper}>
      <div ref={ref} className={style.listImg}>
        {pictures.map((img, i) => (
          <img key={i} src={img} alt={`img ${i}`} />
        ))}
      </div>
      <button onClick={handlePrevClick} className={style.arrow}>
        {arrow}
      </button>
      <button
        onClick={handleNextClick}
        className={`${style.arrow} ${style.arrowNext}`}
      >
        {arrow}
      </button>
    </div>
  );
};

export default Gallery;
