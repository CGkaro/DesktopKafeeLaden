import fbConfig from "../../config/fbConfig";

export const fetchUser = () => async dispatch => {
  fbConfig
    .ref()
    .child("User")
    .on("value", snapshot => {
      dispatch({
        type: "VIEW_USER",
        payload: snapshot.val()
      });
    });
};
