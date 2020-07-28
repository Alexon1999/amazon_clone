import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';

// import StateProvider from './context/State';
import CheckOut from './CheckOut';
import LogIn from './LogIn';

import { useStateValue } from './context/State';
import auth from './firebase/firebase';
import NotfoundPage from './NotfoundPage';

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
      unSubscribe();
    };
  }, [dispatch]);

  console.log(user);

  return (
    <>
      <Router>
        <div className='app'>
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

            <Route exact>
              <NotfoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
