import * as api from "../api";
import {
  FETCH_SODAS,
  FETCH_SODA,
  UPDATE_SODA,
  DELETE_SODA,
  CREATE_SODA,
} from "../constants/actionTypes";

export const getSodas = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSodas();
    dispatch({ type: FETCH_SODAS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getSoda = (sodaId) => async (dispatch) => {
  try {
    const { data } = await api.fetchSoda(sodaId);
    dispatch({ type: FETCH_SODA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSoda = (sodaId, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateSoda(sodaId, formData);
    dispatch({ type: UPDATE_SODA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSodaQuantity = (sodaId, amount) => async (dispatch) => {
  try {
    const { data } = await api.updateSodaQuantity(sodaId, amount);
    if (data.message) return data.message;
    dispatch({ type: UPDATE_SODA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSoda = (sodaId) => async (dispatch) => {
  try {
    const { data } = await api.deleteSoda(sodaId);
    if (data.message) return data.message;
    dispatch({ type: DELETE_SODA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSoda = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createSoda(formData);
    if (data.message) return data.message;
    dispatch({ type: CREATE_SODA, payload: data });
  } catch (error) {
    console.log(error);
  }
};
