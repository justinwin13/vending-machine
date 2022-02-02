import { combineReducers } from "redux";
import sodas from "./sodas";
import auth from "./auth";
import guest from "./guest";

export default combineReducers({
  sodas,
  auth,
  guest,
});
