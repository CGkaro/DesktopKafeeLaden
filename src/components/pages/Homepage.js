import React, { Component } from "react";
import Sidebar from "../layout/Sidebar";
import { connect } from "react-redux";
import CategoriesList from "../layout/CategoriesList";
import { fetchCategories } from "../../store/actions/CategoriesActions";
import { Redirect } from "react-router-dom";

export class Homepage extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
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
  return {
    categories: Object.values(state.firebase),
    auth: state.firebaseAuth.auth
  };
};
export default connect(
  mapStateToProps,
  { fetchCategories }
)(Homepage);
