import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducers";
import surveysReducers from "./surveysReducers";

export default combineReducers({
  auth: authReducers,
  form: formReducer,
  surveys: surveysReducers,
});
