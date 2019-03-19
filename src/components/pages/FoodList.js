import React, { Component } from "react";
import { fetchFoods } from "../../store/actions/FoodActions";
import { fetchCategories } from "../../store/actions/CategoriesActions";
import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import FoodsCard from "../Categories/FoodsCard";
import { Redirect } from "react-router-dom";
import CreateFood from "../Categories/CreateFood";
import "../../css/table.css";
import SearchNav from "../layout/SearchNav";
import navcss from "../../css/sidenav.css";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  componentWillMount() {
    this.props.fetchFoods();
    this.props.fetchCategories();
  }
  updateSearch = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { foods, categories, auth } = this.props;
    let cons = foods.filter(categ => {
      try {
        if (typeof categ !== "undefined" || null) {
          if (categ.Name.toLowerCase().includes(this.state.search)) {
            return categ;
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
    let newId = foods.map(item => {
      return parseInt(item.Id, 10);
    });
    console.log("IDS", Math.max.apply(Math, newId) + 1);

    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div>
        <SearchNav value={this.state.search} action={this.updateSearch} />

        <div className="custom-container wrapper" style={navcss}>
          <table>
            <thead>
              <tr>
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
              {cons &&
                cons.map(food => {
                  return (
                    <FoodsCard
                      food={food}
                      category={categories}
                      key={food.Id}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <CreateFood
          id={Math.max.apply(Math, newId) + 1}
          category={categories}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    foods: Object.values(state.foods),
    categories: Object.values(state.firebase),
    auth: state.firebaseAuth.auth
  };
};
export default connect(
  mapStateToProps,
  { fetchFoods, fetchCategories }
)(FoodList);
