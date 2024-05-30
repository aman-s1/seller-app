import React from 'react';

const InventoryContext = React.createContext({
  items: [],
  decreaseSize: (id, size) => {},
  increaseSize: (id, size) => {},
});

export default InventoryContext;
