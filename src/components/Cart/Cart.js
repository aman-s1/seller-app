import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import InventoryContext from '../../store/inventory-context';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const inventoryCtx =  useContext(InventoryContext);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item.id);
    inventoryCtx.increaseSize(item.id, item.size);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
    inventoryCtx.decreaseSize(item.id, item.size);
  };
  
  const cartItems = (
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem key={item.id} name={item.name} size={item.size} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item)} onAdd={cartItemAddHandler.bind(null, item)} />
        ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose} >
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart