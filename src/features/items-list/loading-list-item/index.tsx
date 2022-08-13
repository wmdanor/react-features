import React, { FC } from 'react';
import styles from './styles.module.css';

/**
 * Component for testing the display of loading animation coded manually.
 * react-content-loader will be used in other places
 */
const LoadingListItem: FC = () => {
  return <div className={styles.loadingListItem}></div>;
};

export default LoadingListItem;
