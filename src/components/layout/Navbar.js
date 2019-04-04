import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { SideNav, SideNavItem } from "react-materialize";
//import M from "materialize-css";
export default NavBar => {
  return (
    <div className="top-nav navbar-fixed ">
      <nav>
        <div className="nav-wrapper wrapper  #263238 blue-grey darken-4">
          <SideNav
            options={{ closeOnClick: true }}
            trigger={
              <a href="" className="button-collapse">
                <i className="material-icons">menu</i>
              </a>
            }
          >
            <Link to="/SignUp">SignUp</Link>
            <Link to="/">LogIn</Link>
            <SideNavItem divider />
            <SideNavItem subheader>addendum</SideNavItem>
          </SideNav>
        </div>
      </nav>
    </div>
  );
};
