import React, { Component } from "react";
import { fetchFoods } from "../../store/actions/FoodActions";

import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import FoodsCard from "../Categories/FoodsCard";
import { Redirect } from "react-router-dom";
import CreateFood from "../Categories/CreateFood";
import "../../css/table.css";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  componentWillMount() {
    this.props.fetchFoods();
  }
  updateSearch = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { categories, auth } = this.props;
    let cons = categories.filter(categ => {
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
    console.log("categ", cons);

    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div>
        <nav>
          <div className="nav-wrapper right">
            <form>
              <div className="input-field right">
                <input
                  id="search"
                  type="search"
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                  required
                />
                <label className="label-icon right" for="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <Sidebar />
        <div className="custom-container" style={{ paddingLeft: "230px" }}>
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
              {cons &&
                cons.map(category => {
                  return <FoodsCard category={category} key={category.Id} />;
                })}
            </tbody>
          </table>
        </div>

        <CreateFood />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    categories: Object.values(state.foods),
    auth: state.firebaseAuth.auth
  };
};
export default connect(
  mapStateToProps,
  { fetchFoods }
)(FoodList);
