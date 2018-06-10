// Home/index.js

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return(
      <div className="Problems">
        <ul>
          <li><Link to="/one">Problem One</Link></li>
          <li><Link to="/two">Problem Two</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;