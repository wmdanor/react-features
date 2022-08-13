import React, { FC } from 'react';
import styles from './styles.module.css';

export interface Item {
  id: string | number;
  name: string;
}

interface Props {
  item: Item;
}

const ListItem: FC<Props> = ({ item }) => {
  return (
    <div className={styles.listItem}>
      <span>{item.id}</span>
      <span>. </span>
      <span>{item.name}</span>
    </div>
  );
};

export default ListItem;
