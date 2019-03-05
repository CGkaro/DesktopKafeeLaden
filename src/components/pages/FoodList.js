import React, { Component } from "react";
import { fetchFoods } from "../../store/actions/CategoriesActions";
import { connect } from "react-redux";
import CategoryCard from "../Categories/CategoryCard";
import { Link } from "react-router-dom";
import CategoriesList from "../layout/CategoriesList";
import Sidebar from "../layout/Sidebar";
import FoodsCard from "../Categories/FoodsCard";

class FoodList extends Component {
  componentWillMount() {
    this.props.fetchFoods();
  }

  render() {
    const categories = this.props.categories;
    console.log("FOODLIST Props", this.props);
    console.log("FOODLIST Props2", this.props.categories);

    return (
      <div>
        <Sidebar />
        <div className="wrapper" style={{ paddingLeft: "300px" }}>
          <div className="row">
            {categories &&
              categories.map(category => {
                return <FoodsCard category={category} key={category.Id} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("FOODLISR", state); //COMMETNOOTKNTGKNE
  console.log("FOODLIST STATE", Object.values(state.firebase));

  return {
    categories: Object.values(state.firebase)
  };
};
export default connect(
  mapStateToProps,
  { fetchFoods }
)(FoodList);
