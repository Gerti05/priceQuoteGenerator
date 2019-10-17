import { combineReducers } from "redux";
import ZipCode from "./zipCode";
import Services from "./services";

export default combineReducers({zipCode: ZipCode, services: Services});
  