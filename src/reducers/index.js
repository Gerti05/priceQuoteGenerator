import { combineReducers } from "redux";
import ZipCode from "./zipCodeReducer";
import Services1 from "./servicesReducer1";

export default combineReducers({zipCode: ZipCode, services1: Services1 });
  