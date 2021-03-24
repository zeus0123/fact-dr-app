import * as constants from './constants';

export const requestUsers = () => ({
  type: constants.REQUEST_USERS
});

export const getUsers = (payload) => ({
  type: constants.GET_USERS,
  payload
});

export const getCurrentUserData = (payload) => ({
  type: constants.CURRENT_USER,
  payload
})

export const clearCurrentUserData = () => ({
  type: constants.CLEAR_CURRENT_USER
})