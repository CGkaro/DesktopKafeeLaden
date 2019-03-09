import React, { Component } from "react";
import Sidebar from "../layout/Sidebar";
import { connect } from "react-redux";
import CategoriesList from "../layout/CategoriesList";
import { fetchCategories } from "../../store/actions/CategoriesActions";
import { Redirect } from "react-router-dom";

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
        <CategoriesList categories={cons} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATEhmpg", state);
  return {
    categories: Object.values(state.firebase),
    auth: state.firebaseAuth.auth
  };
};
export default connect(
  mapStateToProps,
  { fetchCategories }
)(Homepage);
