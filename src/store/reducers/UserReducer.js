const initState = {
  User: {
    "152468952": {
      isStaff: "0",
      name: "Execute PUSH",
      password: "qwertt"
    },
    "653123456": {
      isStaff: 1,
      name: "liar100.oo1@gmail.com",
      password: "qwerty"
    },
    "123456788": {
      isStaff: 1,
      name: "Roma Invicta",
      password: "qwertyu"
    }
  }
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state
      };
    case "VIEW_USER":
      console.log("view_user", action.payload);
      return action.payload;
    case "DELETE_USER":
      console.log("view_user", action.payload);
    default:
      return state;
  }
};

export default userReducer;
