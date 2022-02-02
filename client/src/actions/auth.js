import * as api from "../api";
import decode from "jwt-decode";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const {
      data: { token },
    } = await api.signIn(formData);
    const decodedToken = decode(token);
    dispatch({ type: "AUTH", payload: { ...decodedToken, token } });
    localStorage.setItem("user", JSON.stringify(decodedToken));
    localStorage.setItem("token", token);

    navigate("/vending-machine");
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const {
      data: { token },
    } = await api.signUp(formData);
    const decodedToken = decode(token);
    dispatch({ type: "AUTH", payload: { ...decodedToken, token } });
    localStorage.setItem("user", JSON.stringify(decodedToken));
    localStorage.setItem("token", token);

    navigate("/vending-machine");
  } catch (error) {
    console.log(error.message);
  }
};
