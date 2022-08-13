import React, { FC, memo } from 'react';
import styles from './styles.module.css';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${styles.button} ${className ?? ''}`}>
      {children}
    </button>
  );
};

export default Button;

export const MemoButton = memo(Button);
