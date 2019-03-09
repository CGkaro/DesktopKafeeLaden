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
export const filterCategories = category => async dispatch => {
  console.log("filter", category);
  if (category !== null || "") {
    fbConfig
      .ref()
      .child("Category")
      .orderByChild("Name")
      .equalTo(category.search)
      .on("value", snapshot => {
        dispatch({
          type: "FILTER_CATEGORIES",
          payload: snapshot.val()
        });
      });
  } else {
    fbConfig
      .ref()
      .child("Category")
      .on("value", snapshot => {
        dispatch({
          type: "VIEW_CATEGORIES",
          payload: snapshot.val()
        });
      });
  }
};

export const deleteCategories = completeToDoId => async dispatch => {
  console.log(completeToDoId);
  fbConfig
    .ref()
    .child("Category")
    .child(completeToDoId)
    .remove();
};

export const editCategory = category => {
  console.log("EditACtionReducer", category);
  if (category.Name !== "") {
    fbConfig
      .ref()
      .child("Category/" + category.Id)
      .child("Name")
      .set(category.Name);
  }
  if (category.Image !== "") {
    fbConfig
      .ref()
      .child("Category/" + category.Id)
      .child("Image")
      .set(category.Image);
  }

  return (dispatch, getState) => {
    dispatch({ type: "CREATE_CATEGORY", category });
  };
};
