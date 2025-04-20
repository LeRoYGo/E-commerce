import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={style.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
