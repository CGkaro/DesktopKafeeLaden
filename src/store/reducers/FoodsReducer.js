const initState = {
  Foods: [
    {
      Description:
        "Apple in yoghurt sauce with walnut & sunflower seeds coated with cane sugar and sesame seeds",
      Discount: "0",
      Image:
        "http://medifoods.my/images/menu/a4_caramelised_sunflower_seeds.jpg",
      MenuId: "01",
      Name: "DOUBLE DELIGHT",
      Price: "1000"
    },
    {
      Description:
        "Apple in yoghurt sauce with walnut & sunflower seeds coated with cane sugar and sesame seeds",
      Discount: "0",
      Image:
        "http://medifoods.my/images/menu/a4_caramelised_sunflower_seeds.jpg",
      MenuId: "01",
      Name: "DOUBLE DELIGHT",
      Price: "1000"
    },
    {
      Description:
        "Apple in yoghurt sauce with walnut & sunflower seeds coated with cane sugar and sesame seeds",
      Discount: "0",
      Image:
        "http://medifoods.my/images/menu/a4_caramelised_sunflower_seeds.jpg",
      MenuId: "01",
      Name: "DOUBLE DELIGHT",
      Price: "1000"
    }
  ]
};

const foodsReducer = (state = initState, action) => {
  switch (action.type2) {
    case "CREATE_FOOD":
      //console.log("created_cat", state);
      return {
        ...state
      };
    case "VIEW_FOODS":
      console.log("VIEWFOODSREDUCER", action.payload2);
      return action.payload2;
    case "DELETE_FOOD":
      console.log("VIEWFOODSREDUCER", action.payload2);
    default:
      return state;
  }
};

export default foodsReducer;
