// Problems/One/index.js
// Multiples of 3 and 5

import React, { Component } from "react";

import Description from "../../Description";
import Results from "../../Results";

class One extends Component {
  render() {
    return(
      <div>
        <h2>Problem Two - Even Fibonacci Numbers</h2>
        <Description description={"By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms."} />
        <Results result={0} time={""} />
      </div>
    );
  }
}

export default One;