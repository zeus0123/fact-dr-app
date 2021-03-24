import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as constants from "./constants";
import { getUsers } from "./actions";
import { getUserData } from './service';

function* getUsersRequest() {
  try {
    const response = yield call(getUserData);
    yield put(getUsers(response))
  } catch (error) {
    console.log(error);
  }
}
 
function* userSaga() {
  yield all([
    yield takeLatest(constants.REQUEST_USERS, getUsersRequest),
  ]);
}

export default userSaga;