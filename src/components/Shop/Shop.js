import React from 'react'

import ShopSummary from './ShopSummary';
import AvailableItems from './AvailableItems';

const Shop = () => {
  return (
    <React.Fragment>
        <ShopSummary />
        <AvailableItems />
    </React.Fragment>
  )
}

export default Shop;