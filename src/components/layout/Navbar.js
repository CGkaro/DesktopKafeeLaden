import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    console.log("searchnavnac", this.props);
    return (
      <nav>
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
              <Link to="/">LogIn</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
