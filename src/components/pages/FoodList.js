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
    const menuIds = [];

    categories.map(category => {
      menuIds.push(category.Id);
    });

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div>
        <Sidebar />
        <div className="wrapper" style={{ paddingLeft: "300px" }}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Discount</th>
                <th>MenuId</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {categories &&
                categories.map(category => {
                  return <FoodsCard category={category} key={category.Id} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    categories: Object.values(state.firebase),
    auth: state.firebaseAuth.auth
  };
};
export default connect(
  mapStateToProps,
  { fetchFoods }
)(FoodList);
