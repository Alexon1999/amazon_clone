import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';

import StateProvider from './context/State';
import CheckOut from './CheckOut';
import LogIn from './LogIn';

function App() {
  return (
    <StateProvider>
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
          </Switch>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
