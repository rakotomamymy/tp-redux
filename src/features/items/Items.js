import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  remove,
  add,
  selectItems,
} from './itemsSlice';

export function Itmes() {

  let itemId = 0;

  const itemList = useSelector(selectItems);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");

  const onAddNewItem = () => {
    dispatch(add(newItem));
    setNewItem("");
  }
  
  const onRemoveItem = item => {
    dispatch(remove(item));
  }

  return (
    <div>
      <div>
        {
          itemList.map(item => 
            <div key={itemId++}>
              <span>{item}</span> <button onClick={() => onRemoveItem(item)}> Remove </button>
            </div>)
        }
        <input type="text" name="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
        <button onClick={onAddNewItem}> Add </button>
      </div>
    </div>
  );
}
