import React, { useReducer, useContext } from 'react';

import StateContext from './StateContext';
import StateReducer from './StateReducer';

const StateProvider = ({ children }) => {
  const initialState = {
    basket: [],
    user: null,
  };
  // const [state, dispatch] = useReducer(StateReducer, initialState);

  return (
    <StateContext.Provider
      value={
        //   {
        //   basket: state.basket,
        //   user: state.user,
        // }
        useReducer(StateReducer, initialState)
      }>
      {children}
    </StateContext.Provider>
  );
};

//+ The way for us to acces state value from components
// it 's a function that returns context value object
export const useStateValue = () => useContext(StateContext);

export default StateProvider;
