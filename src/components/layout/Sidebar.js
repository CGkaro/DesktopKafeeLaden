import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/AuthActions";
import { connect } from "react-redux";
import { SideNav, SideNavItem } from "react-materialize";
import { fetchUser } from "../../store/actions/UserActions";
import "../../css/sidenav.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "default"
    };
  }
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const userData = this.props.user;
    const email = this.props.auth.email;
    let name = "";
    const userName = Object.values(userData);
    userName.map(arrayItem => {
      if (arrayItem.email == email) {
        name = arrayItem.name;
      }
    });

    return (
      <SideNav
        options={{ closeOnClick: true }}
        trigger={
          <a href="" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
        }
      >
        <SideNavItem
          style={{ background: "rgba(0,0,0,0.3)" }}
          userView
          user={{
            background:
              "https://img.grouponcdn.com/pwa_test/gz8X5AKEGBZ2mudqiwg1LpgpoKq/gz-800x533/v1/c700x420.jpg",
            name: `${name}`,
            email: `${this.props.auth.email}`
          }}
        />
        <Link to="/Homepage">Categories</Link>
        <Link to="/Food">Foods</Link>
        <SideNavItem divider />
        <SideNavItem subheader>addendum</SideNavItem>
        <SideNavItem onClick={this.props.signOut}>LogOut</SideNavItem>
      </SideNav>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE FROM SIDEVAR", state);
  return {
    auth: state.firebaseAuth.auth,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { signOut, fetchUser }
)(SideBar);
