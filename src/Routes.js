// Routes.js

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import One from "./components/Problems/One";
import Two from "./components/Problems/Two";

class Routes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/one" component={One} />
        <Route path="/two" component={Two} />
      </Switch>
    );
  }
}

export default Routes;