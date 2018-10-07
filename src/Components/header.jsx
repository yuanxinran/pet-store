import React, { Component } from "react";
import Logo from "../imgs/logo.png";
import User from "../imgs/user.png";
import Cartimg from "../imgs/cart.png";

class Search extends Component {
  render() {
    let input = {
      width: "80%",
      display: "inline-block"
    };
    let button = {
      width: "20%",
      display: "inline-block",
      marginBottom: 10
    };

    return (
      <div className="searchBar bottom-div">
        <form className="bottom-div-ele" style={input}>
          <input type="text" id="search" placeholder="Search In Muddy Paw..." />
        </form>
        <button style={button} className="bottom-div-ele">
          Search
        </button>
      </div>
    );
  }
}

class Account extends Component {
  state = {};
  render() {
    return (
      <div className="headCats">
        <img src={User} />
        <div>My Account</div>
      </div>
    );
  }
}

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="headCats">
        <img src={Cartimg} />
        <div>Cart</div>
      </div>
    );
  }
}

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="heading">
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="search">
            <Search />
          </div>
          <div className="icon-actions">
            <div className="content">
              <Account />
              <Cart />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
