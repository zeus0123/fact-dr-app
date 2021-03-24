import { all, fork } from 'redux-saga/effects';
import getProuctSaga from '../containers/ProductContainer/meta/saga';
import getUserSaga from '../containers/UserContainer/meta/saga';

export default function* saga() {
  yield all([
    fork(getProuctSaga),
    fork(getUserSaga)
  ]);
}