import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/AuthActions";
import { connect } from "react-redux";
import { SideNav, SideNavItem, Button } from "react-materialize";

const SideBar = props => {
  return (
    <SideNav
      options={{ closeOnClick: true }}
      trigger={
        <a href="" className="button-collapse">
          <i class="material-icons">menu</i>
        </a>
      }
    >
      <SideNavItem
        style={{ background: "rgba(0,0,0,0.3)" }}
        userView
        user={{
          background:
            "https://img.grouponcdn.com/pwa_test/gz8X5AKEGBZ2mudqiwg1LpgpoKq/gz-800x533/v1/c700x420.jpg",

          name: "User",
          email: `${props.auth.email}`
        }}
      />
      <Link waves to="/Homepage">
        Categories
      </Link>
      <Link to="/Food">Foods</Link>
      <SideNavItem divider />
      <SideNavItem subheader>addendum</SideNavItem>
      <SideNavItem onClick={props.signOut}>LogOut</SideNavItem>
    </SideNav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebaseAuth.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
