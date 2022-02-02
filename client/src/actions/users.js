import * as api from "../api";
import { SET_USER, UPDATE_BALANCE } from "../constants/actionTypes";

export const getUser = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getUser(userId);
    dispatch({ type: SET_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserBalance = (userId, amount) => async (dispatch) => {
  try {
    const { data } = await api.updateUserBalance(userId, amount);
    if ( data?.message ) return data.message;
    dispatch({ type: UPDATE_BALANCE, payload: data.balance });
  } catch (error) {
    console.log(error);
  }
};
