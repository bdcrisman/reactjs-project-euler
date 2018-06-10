// Header/index.js

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/"><h1>Project Euler Problems</h1></Link>
      </div>
    );
  }
}

export default Header;