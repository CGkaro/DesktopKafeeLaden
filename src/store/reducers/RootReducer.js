import authReducer from "./AuthReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import data from "./CategoriesReducer";
import data2 from "./FoodsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: data,
  foods: data2,
  firebaseAuth: firebaseReducer
});

export default rootReducer;
