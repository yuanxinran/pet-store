import React, { Component } from "react";
import CatImg from "../imgs/cat.png";

class Carousel extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    let style = {
      width: "100%",
      margin: "0"
    };
    return (
      <React.Fragment>
        <img src={CatImg} style={style} />
      </React.Fragment>
    );
  }
}

export default Carousel;
