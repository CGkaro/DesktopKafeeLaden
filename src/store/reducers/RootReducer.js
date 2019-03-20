import authReducer from "./AuthReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import data from "./CategoriesReducer";
import data2 from "./FoodsReducer";
import data3 from "./UserReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: data,
  foods: data2,
  firebaseAuth: firebaseReducer,
  user: data3
});

export default rootReducer;
