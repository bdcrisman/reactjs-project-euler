// Description/index.js

import React, { Component } from "react";

class Description extends Component {
  render() {
    return(
      <div>
        <h4>Description: {this.props.description}</h4>
      </div>
    );
  }
}

export default Description;