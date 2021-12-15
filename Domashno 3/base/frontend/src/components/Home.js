import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Cars from "./Cars"
import Dealerships from "./Dealerships"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/dealerships" element={<Dealerships />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
