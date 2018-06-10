// Results/index.js

import React, { Component } from "react";

class Results extends Component {
  render() {
    return(
      <div>
        <h3>Results</h3>
        <div>Result: {this.props.result}</div>
        <div>Time: {this.props.time}</div>
      </div>
    );
  }
}

export default Results;