import React, { Component } from "react";
import "./App.css";
import Main from "./Views/main";
import Browse from "./Views/browse";
import Detail from "./Views/detail";
import ShopCat from "./Views/shopcat";
import Navbar from "./Components/navbar.jsx";
import Header from "./Components/header";
import Footer from "./Components/footer";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route path="/products/:id" component={Detail} />
            <Route path="/products" component={Browse} />
            <Route path="/shopcat" component={ShopCat} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
