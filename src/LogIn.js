import React, { useState } from 'react';
import './LogIn.css';

import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { auth } from './firebase/firebase';

const LogIn = () => {
  const history = useHistory();
  // const location = useLocation();
  // const match = useRouteMatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in succesfully
        // redirect to home page
        history.push('/');
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in
        // redirect to home page
        // auth.user.updateProfile({ displayName: 'Alexon' });

        history.push('/');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/langfr-420px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type='submit' className='login__sigInButton'>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default LogIn;
