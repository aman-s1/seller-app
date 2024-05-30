import React, { useState } from 'react';

import classes from './ShopItemForm.module.css';

const ShopItemForm = (props) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (selectedSize) {
      props.onAddToCart(props.id, selectedSize);
      setSelectedSize('');
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>
        <input
          type="radio"
          name="size"
          value="S"
          checked={selectedSize === 'S'}
          onChange={handleSizeChange}
        />
        {props.sizeS} (S)
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="M"
          checked={selectedSize === 'M'}
          onChange={handleSizeChange}
        />
        {props.sizeM} (M)
      </label>
      <label>
        <input
          type="radio"
          name="size"
          value="L"
          checked={selectedSize === 'L'}
          onChange={handleSizeChange}
        />
        {props.sizeL} (L)
      </label>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default ShopItemForm;
