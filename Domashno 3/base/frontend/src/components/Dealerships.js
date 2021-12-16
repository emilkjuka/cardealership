import React, { Component } from "react";
import SearchBar from"./SearchBar";

export default class Dealerships extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div><SearchBar /><p>this is the dealership page</p></div>;
  }
}
