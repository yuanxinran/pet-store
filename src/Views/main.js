import React, { Component } from "react";
import "../styles/main.css";
import Scroller from "../Components/scroll";
import Carousel from "../Components/carousel";
import IMG1 from "../imgs/item1.png";
import { getItems } from "../Components/item";

class Main extends Component {
  state = {
    items: getItems()
  };
  render() {
    return (
      <React.Fragment>
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="scroller-container">
          <Scroller title="Best Seller" items={this.state.items} />
        </div>
        <div className="main-item-category">
          <div className="cat">
            <div className="cat-content">
              <ul className="links">
                <li className="title">Shop Dogs</li>
                <li>Dog Harness</li>
                <li>Food storage attachment</li>
                <li>Water storage attachment</li>
                <li>GPS</li>
              </ul>
            </div>
          </div>
          <div className="cat">
            <div className="cat-content">
              <ul className="links">
                <li className="title">Shop Cats</li>
                <li>Cat Harness</li>
                <li>Cat bagpack</li>
                <li>Food storage attachment</li>
                <li>Water storage attachment</li>
                <li>GPS</li>
              </ul>
            </div>
          </div>
          <div className="cat cat-wide">
            <div className="cat-content">
              <div className="content">
                <div className="title">Muddy Paw Community</div>
                <div className="img">
                  <img src={require("../imgs/community.jpg")} />
                </div>
                <div className="description">
                  <div className="txt">
                    Come and Explore what other cats and dogs are doring! Share
                    your story with us!
                  </div>
                  <button className="purple">Explore Community</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
