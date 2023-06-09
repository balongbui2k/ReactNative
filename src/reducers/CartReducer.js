import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET_CART,
} from './../actions/CartAction';

const initialState = {
  carts: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.carts[action.payload.id];
      // console.log('existingItem>>>', existingItem);
      if (existingItem) {
        return {
          ...state,
          carts: {
            ...state.carts,
            [action.payload.id]: {
              ...state.carts[action.payload.id],
              quantity: state.carts[action.payload.id].quantity + 1,
            },
          },
        };
      }

      const newItem = {
        ...action.payload,
        quantity: 1,
      };

      return {
        ...state,
        carts: {
          ...state.carts,
          [action.payload.id]: newItem,
        },
      };

    case REMOVE_FROM_CART:
      const updatedCart = {...state.carts};
      const itemToRemove = updatedCart[action.payload.id];

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          const updatedItem = {
            ...itemToRemove,
            quantity: itemToRemove.quantity - 1,
          };

          updatedCart[action.payload.id] = updatedItem;
        } else {
          delete updatedCart[action.payload.id];
        }
      }

      return {
        ...state,
        carts: updatedCart,
      };

    case RESET_CART:
      return {...state, carts: {}};

    default:
      return state;
  }
};

export default cartReducer;
