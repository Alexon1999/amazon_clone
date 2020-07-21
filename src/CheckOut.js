import React from 'react';
import './CheckOut.css';

import { useStateValue } from './context/State';
import CheckoutProduct from './CheckoutProduct';
import { ShoppingBasketSharp } from '@material-ui/icons';
import SubTotal from './SubTotal';

const CheckOut = () => {
  // const [state, dispatch] = useStateValue();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        {basket?.length === 0 ? (
          <div className='checkout__nobasket'>
            <h1>Your shopping Basket is Empty</h1>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div className='checkout__shoppingItems'>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct key={item.id} {...item} />
              // <CheckoutProduct
              //   id={item.id}
              //   price={item.price}
              //   rating={item.rating}
              //   title={item.title}
              //   image={item.image}
              // />
            ))}
          </div>
        )}
      </div>

      {basket?.length > 0 && (
        <div className='checkout__right'>
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default CheckOut;