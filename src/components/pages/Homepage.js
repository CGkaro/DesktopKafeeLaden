import React, { Component } from "react";
import { connect } from "react-redux";
import CategoriesList from "../Categories/CategoriesList";
import { fetchCategories } from "../../store/actions/CategoriesActions";
import { Redirect } from "react-router-dom";
import SearchNav from "../layout/SearchNav";

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  componentDidMount() {
    this.props.fetchCategories();
  }
  updateSearch = event => {
    this.setState({ search: event.target.value });
  };
  render() {
    const { categories, auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;

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

    return (
      <div>
        <SearchNav
          value={this.state.search}
          action={this.updateSearch}
          auth={auth}
        />

        <CategoriesList categories={cons} />
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
