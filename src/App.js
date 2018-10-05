import React, { Component } from "react";
import "./App.css";
import Browse from "./Views/browse";
import Detail from "./Views/detail";
import Navbar from "./Components/navbar";
import Header from "./Components/header";
import { BrowserRouter, Route } from "react-router-dom";
import { Button } from "vanilla-framework-react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <BrowserRouter>
          <div>
            <Route
              exact={true}
              path="/browse"
              render={() => (
                <div className="App">
                  <Browse />
                </div>
              )}
            />
            <Route
              exact={true}
              path="/detail"
              render={() => (
                <div className="App">
                  <Detail />
                </div>
              )}
            />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
