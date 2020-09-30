import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from './SubTotal';

import './Order.css';

import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
  console.log(order.data.created);
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket.map((product) => (
        <CheckoutProduct {...product} hideButton />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className='order__total'>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
};

export default Order;
