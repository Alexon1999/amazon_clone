import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';

// import StateProvider from './context/State';
import CheckOut from './CheckOut';
import LogIn from './LogIn';

import { useStateValue } from './context/State';
import { auth } from './firebase/firebase';
import NotfoundPage from './NotfoundPage';
import Payment from './Payment';
import Alerts from './Alerts';

// + Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

function App() {
  // const [state, dispatch] = useStateValue();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        console.log(authUser);
        dispatch({ type: 'SET_USER', payload: authUser });
      } else {
        // user not loggged in
        dispatch({ type: 'SET_USER', payload: null });
      }
    });

    return () => {
      // clean up
      unSubscribe && unSubscribe();
    };
  }, [dispatch]);

  // console.log(user);

  return (
    <>
      <Router>
        <Alerts />
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

          <Route exact path='/checkout'>
            <Header />
            <CheckOut />
          </Route>

          <Route exact path='/login'>
            <LogIn />
          </Route>

          <Route exact path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>

          <Route exact>
            <NotfoundPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
