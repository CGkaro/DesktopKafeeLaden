const initState = {
  categories: [
    {
      Name: "Coffee",
      Image:
        "https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      Name: "Food",
      Image:
        "https://images.unsplash.com/photo-1524045570440-e451d9d8183b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      Name: "Tea",
      Image:
        "https://images.unsplash.com/photo-1515165454044-e6611f18dd84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    }
  ]
};

const categoryReducer = (state = initState, action) => {
  console.log("CATEGORY CREATED", action.type);
  switch (action.type) {
    case "CREATE_CATEGORY":
      //console.log("created_cat", state);
      return {
        ...state
      };
    case "VIEW_CATEGORIES":
      console.log("view_cat", action.payload);
      return action.payload;
    case "VIEW_FOODS":
      console.log("FOODS", action.payload);
      return action.payload;

    case "DELETE_CATEGORIES":
      console.log("view_cat", action.payload);

    default:
      console.log("default", state);
      return state;
  }
  console.log(state);
};

export default categoryReducer;
