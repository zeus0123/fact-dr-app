import { isEmpty } from "lodash";
import { products } from "../../../utils/data/products"

export const getProductsData = () => {
  return products;
}

export const calcCartData = (payload, oldData) => {
  let productInCart = oldData.filter(o => o.id === payload.id);
  let cart = [];
  if(isEmpty(productInCart)) {
    payload.qty = 1;
    payload.tp = payload.price;
    cart = [...oldData, payload];
    return cart;
  } else {
    let index = oldData.findIndex(o => o.id === payload.id);
    oldData[index].qty += 1;
    oldData[index].tp = oldData[index].qty * oldData[index].price;
    return oldData;
  }
}