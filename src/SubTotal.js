import React from 'react';
import './SubTotal.css';

import CurrencyFormat from 'react-currency-format';

import { useStateValue } from './context/State';
import { useHistory } from 'react-router-dom';

// get all the price of produt what we have inside of basket
export const getBasketTotal = (basket) => {
  return basket?.reduce((price, product) => price + product.price, 0);
};

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className='subtotal'>
      {/* // package : react-currency-format */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button onClick={() => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default SubTotal;
