import BackButton from '../../components/BackButton';
import style from './NotFoundPages.module.scss';

const NotFoundPages = () => {
  return (
    <main className={style.main}>
      <BackButton />
      <h3 className={style.notFound}>404 Not Found 😔</h3>
    </main>
  );
};

export default NotFoundPages;
