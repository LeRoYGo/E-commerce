import style from './BackButton.module.scss';
import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();
  const handlerClick = () => navigate(-1);

  return (
    <button onClick={handlerClick} className={style.btnBack}>
      Back
    </button>
  );
};

export default BackButton;
