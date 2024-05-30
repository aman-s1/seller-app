import React, { useContext } from 'react';

import ShopItemForm from './ShopItemForm';
import CartContext from '../../../store/cart-context';
import InventoryContext from '../../../store/inventory-context';

import classes from './ShopItem.module.css';

const ShopItem = (props) => {
  const cartCtx = useContext(CartContext);
  const inventoryCtx = useContext(InventoryContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = (id, size) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      amount: 1,
      size: size,
      price: props.price,
    });

    inventoryCtx.decreaseSize(props.id, size);
  };
  
  const itemInventory = inventoryCtx.items.find(item => item.id === props.id);

  return (
    <li className={classes.item}>
      <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
      </div>
      <div>
          <ShopItemForm
            id={props.id}
            sizeS={itemInventory.sizeLeftS}
            sizeM={itemInventory.sizeLeftM}
            sizeL={itemInventory.sizeLeftL}
            onAddToCart={addToCartHandler}
          />
      </div>
    </li>
  );
}

export default ShopItem