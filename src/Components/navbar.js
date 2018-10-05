import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="row navbar">
        <div className="col-3">
          {" "}
          <a href="browse">Products</a>
        </div>
        <div className="col-3">
          {" "}
          <a href="browse">Shop Dogs</a>
        </div>
        <div className="col-3">
          {" "}
          <a href="browse">Shop Cats</a>
        </div>
        <div className="col-3">
          {" "}
          <a href="browse">Muddy Paw Community</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
