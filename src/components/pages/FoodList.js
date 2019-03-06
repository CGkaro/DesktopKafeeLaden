import React, { Component } from "react";
import { fetchFoods } from "../../store/actions/CategoriesActions";
import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import FoodsCard from "../Categories/FoodsCard";
import { Redirect } from "react-router-dom";

class FoodList extends Component {
  componentWillMount() {
    this.props.fetchFoods();
  }

  render() {
    const categories = this.props.categories;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;

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
  return {
    categories: Object.values(state.firebase),
    auth: state.firebaseAuth.auth
  };
};
export default connect(
  mapStateToProps,
  { fetchFoods }
)(FoodList);
