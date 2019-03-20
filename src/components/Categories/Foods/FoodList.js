import React, { Component } from "react";
import { fetchFoods } from "../../../store/actions/FoodActions";
import { fetchCategories } from "../../../store/actions/CategoriesActions";
import { connect } from "react-redux";
import FoodsCard from "../../Categories/Foods/FoodsCard";
import { Redirect } from "react-router-dom";
import CreateFood from "../../Categories/Foods/CreateFood";
import "../../../css/table.css";
import SearchNav from "../../layout/SearchNav";
import navcss from "../../../css/sidenav.css";

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
    if (!auth.uid) return <Redirect to="/" />;
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

    return (
      <div>
        <SearchNav value={this.state.search} action={this.updateSearch} />

        <div className="custom-container wrapper" style={navcss}>
          <table className=" responsive-table centered highlight">
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
  if (state.firebase) {
    return {
      foods: Object.values(state.foods),
      categories: Object.values(state.firebase),
      auth: state.firebaseAuth.auth
    };
  } else {
    return {
      foods: Object.values(state.foods),
      categories: [],
      auth: state.firebaseAuth.auth
    };
  }
};
export default connect(
  mapStateToProps,
  { fetchFoods, fetchCategories }
)(FoodList);
