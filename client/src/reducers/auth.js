import {
  SET_USER,
  UPDATE_BALANCE,
  AUTH,
  LOGOUT,
} from "../constants/actionTypes";

const auth = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { authData: action?.payload };
    case UPDATE_BALANCE:
      return {
        ...state,
        authData: { ...state.authData, balance: action?.payload },
      };
    case AUTH:
      return { ...state, authData: action?.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default auth;
