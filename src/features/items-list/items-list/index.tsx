import React, {
  ChangeEventHandler,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Button, { MemoButton } from '../../../components/ui/button';
import Input, { MemoInput } from '../../../components/ui/input';
import Layout from '../../../components/ui/layout';
import ListItem, { Item } from '../list-item';
import LoadingListItem from '../loading-list-item';
import styles from './styles.module.css';

function getItems(): Promise<Item[]> {
  return new Promise<Item[]>((resolve) => {
    const timeout = 1000;

    setTimeout(
      () =>
        resolve([
          { id: '1', name: 'item 1' },
          { id: '2', name: 'item 2' },
          { id: '3', name: 'item 3' },
        ]),
      timeout,
    );
  });
}

/**
 * Component for testing different react hooks
 */
const ItemsList: FC = () => {
  const [itemsCount, setItemsCount] = useState(10);
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');

  const textChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setText(e.currentTarget.value);
    },
    [],
  );

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = useCallback(() => {
    setIsLoading(true);
    getItems()
      .then((items) => {
        setIsLoading(false);
        setItems(items);
      })
      .catch((err) => console.error(err));
  }, []);

  const reset = useCallback(() => {
    setItems([]);
    setIsLoading(false);
  }, []);

  const itemsElements = useMemo(
    () =>
      isLoading ? (
        Array(itemsCount)
          .fill(0)
          .map((_v, i) => <LoadingListItem key={i} />)
      ) : items.length !== 0 ? (
        items.map((item) => <ListItem item={item} key={item.id} />)
      ) : (
        <div>No items</div>
      ),
    [isLoading, items],
  );

  return (
    <Layout>
      <MemoInput type='text' value={text} onChange={textChangeHandler} />
      <MemoButton type='button' onClick={fetchItems}>
        Load items
      </MemoButton>
      <MemoButton type='button' onClick={reset}>
        Reset
      </MemoButton>
      <h1>Items List</h1>
      <div className={styles.itemsList}>{itemsElements}</div>
    </Layout>
  );
};

export default ItemsList;
