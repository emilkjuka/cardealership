import React, { Component } from "react";
import Map from "./Map";

export default class Dealerships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: [[41.9787012, 21.4478089], [41.9922072, 21.4754564]],
    };
  }
  render() {
    return (
      <div className="dealership_wrapper">
        <div className="dealership_list"></div>
        <div className="dealership_map_wrapper">
          {console.log(this.state.cords)}
          <Map cords={this.state.cords} />
        </div>
      </div>
    );
  }
}
