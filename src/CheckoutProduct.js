import React, { forwardRef } from 'react';
import './CheckoutProduct.css';

import { useStateValue } from './context/State';

const CheckoutProduct = forwardRef(
  ({ id, rating, image, title, price, hideButton }, ref) => {
    const [state, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({ type: 'REMOVE_FROM_BASKET', payload: id });
    };

    return (
      <div className='checkoutProduct' ref={ref}>
        <img className='checkoutProduct__image' src={image} alt='' />

        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className='checkoutProduct__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐️</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
