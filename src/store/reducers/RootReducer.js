import authReducer from "./AuthReducer";
import categoryReducer from "./CategoriesReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import data from "./CategoriesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  firebase: data
});

export default rootReducer;
