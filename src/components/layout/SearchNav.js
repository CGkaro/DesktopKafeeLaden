import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "../../css/sidenav.css";

class SearchNav extends Component {
  render() {
    return (
      <div className="top-nav">
        <nav>
          <div className="nav-wrapper wrapper  #263238 blue-grey darken-4">
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
                <label className="label-icon ">
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
