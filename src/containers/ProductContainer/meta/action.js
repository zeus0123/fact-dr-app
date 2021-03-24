import * as constants from './constant';

export const getProducts = () => ({
  type: constants.REQUEST_PRODUCTS
});

export const recieveProducts = (payload) => ({
  type: constants.GET_PRODUCTS,
  payload
});

export const handleModalOpen = () => ({
  type: constants.OPEN_MODAL
});

export const handleModalClose = () => ({
  type: constants.CLOSE_MODAL
});

export const requestCartDetails = (payload) => ({
  type: constants.REQUEST_CART_DETAILS,
  payload
});

export const recieveCartDetails = (payload) => ({
  type: constants.RECIECVE_CART_DETAILS,
  payload
});

export const deleteCartItem = (payload) => ({
  type: constants.DELETE_REQUEST,
  payload
});

export const clearCartData = () => ({
  type: constants.CLEAR_CART
});

