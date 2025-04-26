import BackButton from '../../components/BackButton';
import style from './NotFoundPages.module.scss';

const NotFoundPages = () => {
  return (
    <>
      <BackButton />
      <h3 className={style.notFound}>404 Not Found 😔</h3>
    </>
  );
};

export default NotFoundPages;
