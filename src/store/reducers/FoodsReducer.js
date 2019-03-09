const initState = {
  Foods: [
    {
      Id: "01",
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
      Id: "02",
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
      Id: "03",
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
  switch (action.type) {
    case "CREATE_FOOD":
      return {
        ...state
      };
    case "VIEW_FOODS":
      console.log("view_foods", action.payload);
      return action.payload;
    case "DELETE_FOOD":
      console.log("VIEWFOODSREDUCER", action.payload);
    default:
      return state;
  }
};

export default foodsReducer;
