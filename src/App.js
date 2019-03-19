import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";

import SignIn from "./components/pages/LoginPage";
import FoodList from "./components/Categories/Foods/FoodList";

import AboutPage from "./components/pages/AboutPage";
import "./css/cardcss.css";
import SignupPage from "./components/pages/SignupPage";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/Food" component={FoodList} />
        <Route path="/SignUp" component={SignupPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
