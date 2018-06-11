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
    this.mainTask();
  }

  mainTask = () => {
    this.sumFibo(1, 2, 4000000, 0);
  }

  sumFibo = (prev, next, max, sum) => {
    if (next >= max) {
      this.setState({result: sum});
      return;
    }

    if (this.isEven(next)) {
      sum += next;
    }

    let nextInSeries = prev + next;
    prev = next;
    next = nextInSeries;

    setTimeout(() => {
      this.sumFibo(prev, next, max, sum)
    }, 0);
  }

  isEven(n) {
    return n % 2 === 0;
  }

  render() {
    return(
      <div>
        <h2>Problem Two - Even Fibonacci Numbers</h2>
        <Description description={
          `By considering the terms in the Fibonacci sequence whose values do 
          not exceed four million, find the sum of the even-valued terms.`} />
        <button onClick={this.handleClick}>Start</button>
        <Results result={this.state.result} time={this.state.time} />
      </div>
    );
  }
}

export default One;