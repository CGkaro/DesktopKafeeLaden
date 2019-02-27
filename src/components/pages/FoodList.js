import React, { Component } from "react";
import { fetchFoods } from "../../store/actions/FoodActions";
import { connect } from "react-redux";
import CategoryCard from "../Categories/CategoryCard";
import { Link } from "react-router-dom";

class FoodList extends Component {
  componentWillMount() {
    this.props.fetchFoods();
  }

  render() {
    console.log("FOODLIST PROPS", this.props);
    const { foods } = this.props;
    return (
      <div>
        <div className="wrapper" style={{ paddingLeft: "300px" }}>
          <div className="row">
            <p> {this.props} </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("////FBCONFIGFOODS", state); //COMMETNOOTKNTGKNE
  console.log("////FOODLIST STATE", Object.values(state.data2));

  return {
    Foods: Object.values(state.data2)
  };
};
export default connect(
  mapStateToProps,
  { fetchFoods }
)(FoodList);
