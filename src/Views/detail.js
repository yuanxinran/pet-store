import React, { Component } from "react";
import "../styles/detail.css";
import { getItem } from "../Components/item.js";

class SizeSelect extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="size-select-container">
        <button id="small">Small</button>
        <button id="medium">Medium</button>
        <button id="large">Large</button>
      </div>
    );
  }
}
class ColorSelect extends Component {
  state = {};
  render() {
    return (
      <div class="color-select-container">
        <button id="small">Small</button>
        <button id="medium">Medium</button>
        <button id="large">Large</button>
      </div>
    );
  }
}

class Detail extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state.item = getItem(this.props.match.params.id);
  }

  createStars() {
    let item = this.state.item;
    let result = "";
    for (let i = 1; i <= item.review; i++) {
      result += "★";
    }
    return result;
  }

  createUnfilled() {
    let item = this.state.item;
    let result = "";
    for (let i = item.review + 1; i <= 5; i++) {
      result += "★";
    }
    return result;
  }

  render() {
    let item = this.state.item;
    return (
      <React.Fragment>
        <div className="detail-page">
          <div className="breadcrumb">
            <ul className="p-breadcrumbs">
              <li className="p-breadcrumbs__item">
                <a href="#">Shop for Cats</a>
              </li>
              <li className="p-breadcrumbs__item">
                <a href="#">Cats Bagpack</a>
              </li>
              <li className="p-breadcrumbs__item">{item.title}</li>
            </ul>
          </div>

          <div className="detail-img">
            <img src={item.img} />
          </div>
          <div className="detail-description">
            <div className="title">{item.title}</div>
            <div className="review">
              <span className="filled">{this.createStars()}</span>
              <span className="unfilled">{this.createUnfilled()}</span>
              <span className="review-num">{item.reviewNum} reviews</span>
            </div>
            <div className="price">{item.price}</div>
            <div className="size">
              <SizeSelect />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
