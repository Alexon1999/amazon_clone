import React from 'react';
import './Product.css';

import { useStateValue } from './context/State';

const Product = ({ id, rating, image, title, price }) => {
  // const [state, dispatch] = useStateValue();
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: { id, rating, image, title, price },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>

        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='product__rating'>
          {/* {Array.from({ length: rating }, (_,i) => (
          <p>🔥</p>
        ))} */}
          {/* ////  fill with empty , it will with undefined */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
