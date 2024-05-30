import React from 'react';
import { useState } from 'react';

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

import CartProvider from './store/CartProvider';
import { InventoryProvider } from './store/InventoryProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <InventoryProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
            <Shop />
        </main>
      </InventoryProvider>
    </CartProvider>
  );
}

export default App;
