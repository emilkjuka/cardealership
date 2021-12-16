import React, { Component } from "react";
import Map from "./Map";

export default class Dealerships extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dealership_wrapper">
        <div className="dealership_list"></div>
        <div className="dealership_map_wrapper">
          <Map />
        </div>
      </div>
    );
  }
}
