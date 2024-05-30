import React from 'react'

import classes from './ShopSummary.module.css';

const ShopSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>Good Clothing, Good Looks</h2>
        <p>
            Choose your favorite wear from our broad selection of available items
            and enjoythe shopping at ease with us.
        </p>
    </section>
  );
}

export default ShopSummary;