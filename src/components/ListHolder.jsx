import React, {useReducer, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { listReducer } from '../reducers/ListReducer';
import { ListMap } from './ListMap';
import { AddItem } from './AddItem';
const initialList = [];

export const ListHolder = () => {
  const [listData, dispatchListData] = useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
  const [name, setName] = useState('');

  useEffect(() => {
    const storage = localStorage.getItem('list');
    if (storage!== '[object Object]') {
      listData.list = JSON.parse(storage);
      dispatchListData({ type: 'LIST_ITEM'});
    }
    
  }, []);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });
    setName('');
  }

  function handleRemove(id) {
    return () => {
      dispatchListData({ type: 'REMOVE_ITEM', id});
    };
  }

  return (
    <div>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
      />
      <ListMap
        list={listData.list}
        handleRemove={handleRemove.bind(this)}
      />
    </div>
  );
};