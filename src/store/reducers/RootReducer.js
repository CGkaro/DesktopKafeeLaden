import authReducer from "./AuthReducer";
import categoryReducer from "./CategoriesReducer";
import foodsReducer from "./FoodsReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import data from "./CategoriesReducer";
import data2 from "./FoodsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  firebase: data,
  foods: data2,
  edere: foodsReducer
});

export default rootReducer;
