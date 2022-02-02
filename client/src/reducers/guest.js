import { UPDATE_GUEST_BALANCE } from "../constants/actionTypes";

const guest = (state = { balance: 0 }, action) => {
  switch (action.type) {
    case UPDATE_GUEST_BALANCE:
      const newBalance = state.balance + action?.payload;
      return { balance: newBalance };
    default:
      return state;
  }
};

export default guest;
