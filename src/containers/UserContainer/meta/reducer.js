import * as constants from './constants';

export const initialState = {
  data: [],
  currentUser: []
}

const User = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_USERS:
      return {
        ...state,
        data: action.payload
      }

    case constants.CURRENT_USER:  
      return {
        ...state,
        currentUser: action.payload
      }

    case constants.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: []
      }  

      default:
        return state;
  }
}

export default User;