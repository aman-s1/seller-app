import React, { useState } from 'react';
import InventoryContext from './inventory-context';

export const InventoryProvider = (props) => {
  const [items, setItems] = useState([
    { id: 'item1', sizeLeftS: 10, sizeLeftM: 10, sizeLeftL: 10 },
    { id: 'item2', sizeLeftS: 10, sizeLeftM: 10, sizeLeftL: 10 },
    { id: 'item3', sizeLeftS: 10, sizeLeftM: 10, sizeLeftL: 10 },
    { id: 'item4', sizeLeftS: 10, sizeLeftM: 10, sizeLeftL: 10 },
    { id: 'item5', sizeLeftS: 10, sizeLeftM: 10, sizeLeftL: 10 },
  ]);

  const decreaseSizeHandler = (id, size) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              sizeLeftS: size === 'S' ? item.sizeLeftS - 1 : item.sizeLeftS,
              sizeLeftM: size === 'M' ? item.sizeLeftM - 1 : item.sizeLeftM,
              sizeLeftL: size === 'L' ? item.sizeLeftL - 1 : item.sizeLeftL,
            }
          : item
      )
    );
  };

  const increaseSizeHandler = (id, size) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              sizeLeftS: size === 'S' ? item.sizeLeftS + 1 : item.sizeLeftS,
              sizeLeftM: size === 'M' ? item.sizeLeftM + 1 : item.sizeLeftM,
              sizeLeftL: size === 'L' ? item.sizeLeftL + 1 : item.sizeLeftL,
            }
          : item
      )
    );
  };

  console.log('Inventory Items:', items);
  return (
    <InventoryContext.Provider
      value={{
        items: items,
        decreaseSize: decreaseSizeHandler,
        increaseSize: increaseSizeHandler
      }}
    >
      {props.children}
    </InventoryContext.Provider>
  );
};
