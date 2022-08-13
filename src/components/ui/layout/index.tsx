import React, { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
