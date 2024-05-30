import React from 'react';

import ShopItem from './ShopItem/ShopItem';
import Card from '../UI/Card';
import classes from './AvailableItems.module.css';

const DUMMY_ITEMS = [
    {
        id: 'item1',
        name: 'U.S. Polo Tshirt',
        description: 'Color: Black, Material: Cotton',
        price: 900
    },
    {
        id: 'item2',
        name: 'Benetton V-Neck Tshirt',
        description: 'Color: Blue, Material: Cotton',
        price: 800
    },
    {
        id: 'item3',
        name: 'Arrow Polo Tshirt',
        description: 'Color: Pink, Material: 90% Cotton + 10% Linen',
        price: 1100
    },
    {
        id: 'item4',
        name: 'Snitch Printed Shirt',
        description: 'Color: Rust, Material: Cotton',
        price: 1400
    },
    {
        id: 'item5',
        name: 'Van Heusen Formal Shirt',
        description: 'Color: White, Material: Linen',
        price: 1900
    }
];

const AvailableItems = () => {
    const itemsList = DUMMY_ITEMS.map((item) => (
        <ShopItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            sizeLeftS={10}
            sizeLeftM={10}
            sizeLeftL={10}
        />
      ));
    return (
        <section className={classes.items}>
            <Card>
                <ul>{itemsList}</ul>
            </Card>
        </section>
  );
}

export default AvailableItems