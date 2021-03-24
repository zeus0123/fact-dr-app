import * as constants from './constant';

export const initialState = {
  data: [],
  cart: [],
  openModal: false
}

const Product = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCTS:
      return {
        ...state,
        data: action.payload
      }

    case constants.OPEN_MODAL:
      return {
        ...state,
        openModal: true
      }

    case constants.CLOSE_MODAL:
      return {
        ...state,
        openModal: false
      }

    case constants.RECIECVE_CART_DETAILS:
      return {
        ...state,
        cart: action.payload
      }

    case constants.DELETE_REQUEST:
      return {
        ...state,
        cart: action.payload
      }

    case constants.CLEAR_CART:
      return {
        ...state,
        cart: []
      }  

    default:
      return state;
  }
}

export default Product;