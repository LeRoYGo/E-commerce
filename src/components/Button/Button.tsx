import style from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button className={style.btn} {...props}>
      {text}
    </button>
  );
};

export default Button;
