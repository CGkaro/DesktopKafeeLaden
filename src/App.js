import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import SignIn from "./components/pages/LoginPage";
import FoodList from "./components/Categories/Foods/FoodList";
import AboutPage from "./components/pages/AboutPage";
import "./css/cardcss.css";
import SignupPage from "./components/pages/SignupPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./css/transitions.css";

const App = () => (
  <Router>
    <div>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={SignIn} />
                <Route path="/Homepage" component={Homepage} />
                <Route path="/About" component={AboutPage} />
                <Route path="/Food" component={FoodList} />
                <Route path="/SignUp" component={SignupPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  </Router>
);

export default App;
