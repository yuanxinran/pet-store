import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="p-strip navbar">
        <div className="row">
          <div className="col-3">
            {" "}
            <Link to="/">Shop All</Link>
          </div>
          <div className="col-3">
            {" "}
            <Link to="/shopcat">Shop Dogs</Link>
          </div>
          <div className="col-3">
            {" "}
            <Link to="/shopcat">Shop Cats</Link>
          </div>
          <div className="col-3">
            {" "}
            <Link to="/shopcat">Muddy Paw Community</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
