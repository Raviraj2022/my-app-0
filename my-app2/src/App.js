import React, { Component } from "react";
import Self from "./Self";
export default class App extends Component {
  render() {
    return (
      <div>
        <Self />
        <h2>I am Outside Component</h2>
      </div>
    );
  }
}
