import fbConfig from "../../config/fbConfig";

export const createCategory = category => {
  console.log("createcatreducer", category);
  fbConfig
    .ref()
    .child("Category/" + category.Id)

    .set(category);
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_CATEGORY", category });
  };
};

export const viewCategories = () => {
  return function(dispatch) {
    fbConfig
      .ref()
      .child("Category")
      .on("value", snapshot => {
        dispatch({
          type: "VIEW_CATEGORIES",
          payload: snapshot.val()
        });
      });
  };
};
export const fetchCategories = () => async dispatch => {
  fbConfig
    .ref()
    .child("Category")
    .on("value", snapshot => {
      dispatch({
        type: "VIEW_CATEGORIES",
        payload: snapshot.val()
      });
    });
};
