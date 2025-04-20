import { useRef } from 'react';
import style from './Gallery.module.scss';
import arrow from '../../../../assets/Arrow.svg';
import { GalleryProps } from '../../../../types';

const defaultImg = 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png';

const Gallery = ({ pictures }: GalleryProps) => {
  const ref = useRef<null | HTMLDivElement>(null);
  let currentIndex = 0;

  const goToSlide = (index: number) => {
    if (ref.current === null) return;
    if (index < 0) index = pictures.length - 1;
    else if (index >= pictures.length) index = 0;

    currentIndex = index;
    ref.current.style.transform = `translateX(${-index * 100}%)`;
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
      <button
        onClick={() => goToSlide(currentIndex - 1)}
        className={style.arrow}
      >
        <img src={arrow} />
      </button>
      <button
        onClick={() => goToSlide(currentIndex + 1)}
        className={`${style.arrow} ${style.arrowNext}`}
      >
        <img src={arrow} />
      </button>
    </div>
  );
};

export default Gallery;
