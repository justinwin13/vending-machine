import {
  FETCH_SODAS,
  FETCH_SODA,
  UPDATE_SODA,
  DELETE_SODA,
  CREATE_SODA,
} from "../constants/actionTypes";

const sodas = (state = [], action) => {
  switch (action.type) {
    case FETCH_SODAS:
      return action.payload;
    case FETCH_SODA:
      return state.map((soda) =>
        soda._id === action.payload._id ? action.payload : soda
      );
    case UPDATE_SODA:
      return state.map((soda) =>
        soda._id === action.payload._id ? action.payload : soda
      );
    case DELETE_SODA:
      return state.filter((soda) => soda._id !== action.payload._id);
    case CREATE_SODA: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default sodas;
