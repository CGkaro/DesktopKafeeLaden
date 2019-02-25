import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import { connect } from "react-redux";
import CategoriesList from "../layout/CategoriesList";
import { fetchCategories } from "../../store/actions/CategoriesActions";

export class Homepage extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    console.log("HOMEPAGE PROPS", this.props);
    const { categories } = this.props;
    return (
      <div>
        <nav />
        <Sidebar />

        <CategoriesList categories={categories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("FBCONFIGGGGGGG", state.categories);
  console.log("HOMEPAGE STATE", Object.values(state.firebase));

  return {
    categories: Object.values(state.firebase)
  };
};
export default connect(
  mapStateToProps,
  { fetchCategories }
)(Homepage);
