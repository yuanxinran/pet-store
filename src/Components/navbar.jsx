import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="p-strip navbar">
        <div className="row">
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
      </div>
    );
  }
}

export default Navbar;
