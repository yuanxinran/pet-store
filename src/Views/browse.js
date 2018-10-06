import React, { Component } from "react";
import "../styles/browse.css";
import Scroller from "../Components/scroll.jsx";
import Carousel from "../Components/carousel";
import IMG1 from "../imgs/item1.png";
import { getItems } from "../Components/item.js";

class Browse extends Component {
  state = {
    items: getItems()
  };
  render() {
    return (
      <React.Fragment>
        <div className="carouselContainer">
          <Carousel />
        </div>
        <div className="scrollerContainer">
          <Scroller title="Best Seller" items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default Browse;
