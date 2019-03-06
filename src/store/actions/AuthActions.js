import fbConfig from "../../config/fbConfig";
export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        console.log(newUser);
        return fbConfig
          .ref()
          .child("User/" + newUser.phone)
          .set({
            email: newUser.email,
            name: newUser.firstName + " " + newUser.lastName,
            password: newUser.password,
            isStaff: "1"
          });
      })
      .then(() => {
        dispatch({
          type: "SIGNUP_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGNUP_ERROR" + err
        });
      });
  };
};
