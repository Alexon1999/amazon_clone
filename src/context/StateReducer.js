//+ reducer is a pure fonction

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [action.payload, ...state.basket],
      };
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (product) => product.id === action.payload
      );
      // findIndex :if not found return -1 like indexOf
      // if(index >= 0)
      if (index !== -1) {
        newBasket.splice(index, 1);
      } else {
        console.warn('not found the id');
      }

      return {
        ...state,
        basket: newBasket,
      };

    // return {
    //   ...state,
    //   basket: state.basket?.filter(
    //     (product) => product.id !== action.payload
    //   ),
    // };
    default:
      return state;
  }
};

export default reducer;
