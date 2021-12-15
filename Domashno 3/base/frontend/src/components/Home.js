import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
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
            <Route path="/home" exact element={<p>this is home </p>} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
