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

export const fetchFoods = () => async dispatch => {
  fbConfig
    .ref()
    .child("Foods")
    .on("value", snapshot => {
      dispatch({
        type: "VIEW_FOODS",
        payload: snapshot.val()
      });
    });
};

export const deleteCategories = completeToDoId => async dispatch => {
  console.log(completeToDoId);
  fbConfig
    .ref()
    .child("Category")
    .child(completeToDoId)
    .remove();
};
export const deleteFood = completeToDoId => async dispatch => {
  console.log("DELETEFOODS", completeToDoId);

  fbConfig
    .ref()
    .child("Foods")
    .child(completeToDoId)
    .remove();
  console.log("SUCCESS");
};
export const editCategory = category => {
  console.log("EditACtionReducer", category);
  if (category.Name != "") {
    fbConfig
      .ref()
      .child("Category/" + category.Id)
      .child("Name")
      .set(category.Name);
  }
  if (category.Image != "") {
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

export const editFoods = category => {
  console.log("EditACtionReducer", category);
  if (category.Name != "") {
    fbConfig
      .ref()
      .child("Foods/" + category.Id)
      .child("Name")
      .set(category.Name);
  }
  if (category.Image != "") {
    fbConfig
      .ref()
      .child("Foods/" + category.Id)
      .child("Image")
      .set(category.Image);
  }
  if (category.Description != "") {
    fbConfig
      .ref()
      .child("Foods/" + category.Id)
      .child("Description")
      .set(category.Description);
  }
  if (category.Discount != "") {
    fbConfig
      .ref()
      .child("Foods/" + category.Id)
      .child("Discount")
      .set(category.Discount);
  }
  if (category.MenuId != "") {
    fbConfig
      .ref()
      .child("Foods/" + category.Id)
      .child("MenuId")
      .set(category.MenuId);
  }
  if (category.Price != "") {
    fbConfig
      .ref()
      .child("Foods/" + category.Id)
      .child("Price")
      .set(category.Price);
  }

  return (dispatch, getState) => {
    dispatch({ type: "CREATE_CATEGORY", category });
  };
};
