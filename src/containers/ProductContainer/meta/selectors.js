import { get } from "lodash";

export const getCartData = state => get(state, 'products.cart', []); 