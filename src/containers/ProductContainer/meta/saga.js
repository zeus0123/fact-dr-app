import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import * as constants from "./constant";
import { recieveProducts, recieveCartDetails } from "./action";
import { calcCartData, getProductsData } from './service';
import { getCartData } from './selectors';

function* getProductsRequest() {
  try {
    const response = yield call(getProductsData);
    yield put(recieveProducts(response))
  } catch (error) {
    console.log(error);
  }
}

function* getCartDetailsRequest(action) {
  try {
    const oldCartData = yield select(getCartData);
    const response = yield call(calcCartData, action.payload, oldCartData);
    yield put(recieveCartDetails(response))
  } catch (error) {
    console.log(error);
  }
}
 
function* productSaga() {
  yield all([
    yield takeLatest(constants.REQUEST_PRODUCTS, getProductsRequest),
    yield takeLatest(constants.REQUEST_CART_DETAILS, getCartDetailsRequest)
  ]);
}

export default productSaga;