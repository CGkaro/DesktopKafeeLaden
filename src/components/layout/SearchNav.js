import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import css from "../../css/sidenav.css";

class SearchNav extends Component {
  state = {};

  render() {
    console.log("searchnavnac", this.props);
    return (
      <div className="top-nav">
        <nav>
          <div className="nav-wrapper wrapper">
            <Sidebar />
            <form>
              <div className="input-field right">
                <input
                  id="search"
                  type="search"
                  value={this.props.value}
                  onChange={this.props.action.bind(this)}
                  required
                />
                <label className="label-icon " for="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default SearchNav;
