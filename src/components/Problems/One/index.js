// Problems/One/index.js
// Multiples of 3 and 5

import React, { Component } from "react";

import Description from "../../Description";
import Results from "../../Results";

class One extends Component {
  state = {
    result: 0,
    time: ""
  }

  handleClick = (e) => {
    e.preventDefault();

    this.mainTask(0, 1000, 0);
  }

  mainTask = (n, max, sum) => {
    if (n >= max) {
      this.setState({result: sum});
      return;
    }

    if (n % 3 === 0 && n % 5 === 0) {
      sum += n;
    }

    setTimeout(() => {
      this.mainTask(n + 1, max, sum);
    }, 0);
  }

  render() {
    return(
      <div>
        <h2>Problem One - Multiples of 3 and 5</h2>
        <Description description={"Find the sum of all the multiples of 3 or 5 below 1000"} />
        <button onClick={this.handleClick}>Start</button>
        <Results result={this.state.result} time={this.state.time} />
      </div>
    );
  }
}

export default One;