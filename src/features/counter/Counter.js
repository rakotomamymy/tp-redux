import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';

export function Counter() {

  let itemId = 0;

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");

  const onAddNewItem = () => {
    dispatch(increment(newItem));
    setNewItem("");
  }
  
  const onRemoveItem = item => {
    dispatch(decrement(item));
  }

  return (
    <div>
      <div>
        {
          count.map(item => 
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
