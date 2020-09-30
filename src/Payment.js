import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './context/State';
import './Payment.css';
import { getBasketTotal } from './SubTotal';

import { Link, useHistory } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

import { db } from './firebase/firebase';

const Payment = () => {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSuceded] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  //+ stripe hooks
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    //+ generate stripe client secret which allows us to charge customer
    const getClientSecret = async () => {
      const { data } = await axios({
        method: 'post',
        //? ex: ?totlal=21&id=45 : query params
        // sub currencies : //// (we should put dollar to cents => stripe)
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });

      // pi_1HTZQFL8CQXeA7glXtIpUcNJ_secret_Sn2mk5ydjbdMbbAauhQNwBKYD
      setClientSecret(data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log(clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setProcessing(true);

    // stripe.confirmCardPayment return a promise
    // paymentIntent = payment confiramtion
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

    setSuceded(true);
    setError(null);
    setProcessing(false);

    // empty basket
    dispatch({
      type: 'EMPTY_BASKET',
    });

    // push we can come back to this page
    //  replace : don't let client to comeback
    history.replace('/orders');
  };

  const handleChange = (event) => {
    // Listen for changes in CardElement
    // and display any errors as the customer types their card details
    console.log(event);
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket.length} items</Link>)
        </h1>

        {/* // + Payment section - delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* // + Items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket?.map((product) => (
              <CheckoutProduct {...product} />
            ))}
          </div>
        </div>

        {/* // +  Stripe Payment*/}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            {/* stripe methods */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </div>
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Procesing</p> : 'Buy Now'}</span>
              </button>
            </form>
          </div>
        </div>

        {error && <div style={{ textAlign: 'center' }}>* {error}</div>}
      </div>
    </div>
  );
};

export default Payment;
