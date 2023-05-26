export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = foods => ({
  type: ADD_TO_CART,
  payload: foods,
});

export const removeFromCart = foods => ({
  type: REMOVE_FROM_CART,
  payload: foods,
});
