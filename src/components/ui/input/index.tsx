import React, { FC, memo } from 'react';
import styles from './styles.module.css';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

const Input: FC<Props> = ({ className, ...props }) => {
  return <input className={`${styles.input} ${className ?? ''}`} {...props} />;
};

export default Input;

export const MemoInput = memo(Input);
