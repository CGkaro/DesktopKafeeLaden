import fbConfig from "../../config/fbConfig";

export const createFood = category => {
  console.log("createcatreducer", category);
  fbConfig
    .ref()
    .child("Foods/" + category.Id)

    .set(category);
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_FOOD", category });
  };
};

export const viewFoods = () => {
  return function(dispatch) {
    fbConfig
      .ref()
      .child("Foods")
      .on("value", snapshot => {
        dispatch({
          type2: "VIEW_FOODS",
          payload2: snapshot.val()
        });
      });
  };
};
export const fetchFoods = () => async dispatch => {
  console.log("ENTERED/////////");
  fbConfig
    .ref()
    .child("Foods")
    .on("value", snapshot => {
      //console.log("ALALALLAALALALALALLA", snapshot.val());
      dispatch({
        type2: "VIEW_FOODS",
        payload2: snapshot.val()
      });
    });
};
export const deleteFoods = completeToDoId => async dispatch => {
  console.log(completeToDoId);
  fbConfig
    .ref()
    .child("Foods")
    .child(completeToDoId)
    .remove();
};
