import React, { Component } from "react";
import "../styles/detail.css";
import { getItem } from "../Components/item.js";

function createStars(review) {
  let result = "";
  for (let i = 1; i <= review; i++) {
    result += "★";
  }
  return result;
}

function createUnfilled(review) {
  let result = "";
  for (let i = review + 1; i <= 5; i++) {
    result += "★";
  }
  return result;
}

class ReviewDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    review = this.props.review;
    return (
      <div className="review-container">
        <div className="content">
          <div className="header">
            <div className="average">
              <span className="filled">{createStars(review)}</span>
              <span className="unfilled">{createUnfilled(review)}</span>
            </div>
            <div className="review-cat" />
          </div>
          <div className="" />
        </div>
      </div>
    );
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    count: 1
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    let ori = this.state.count;
    let countn = this.state.count == 1 ? ori : ori - 1;
    this.setState({ count: countn });
  };

  render() {
    let btnclass = "btn";
    btnclass += this.state.count == 1 ? " noincrease" : "";

    return (
      <div className="counter">
        <input
          type="button"
          className={btnclass}
          onClick={this.decrement}
          value="-"
        />
        <div className="count">{this.state.count}</div>
        <input
          type="button"
          className="btn"
          onClick={this.increment}
          value="+"
        />
      </div>
    );
  }
}

class SizeSelect extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="size-select-container">
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
      <div className="color-select-container">
        <form>
          <input
            type="image"
            src={require("../imgs/red.png")}
            alt="Submit"
            width="48"
            height="48"
          />
          <input
            type="image"
            src={require("../imgs/blue.png")}
            alt="Submit"
            width="48"
            height="48"
          />
          <input
            type="image"
            src={require("../imgs/navy.png")}
            alt="Submit"
            width="48"
            height="48"
          />
          <input
            type="image"
            src={require("../imgs/yellow.png")}
            alt="Submit"
            width="48"
            height="48"
          />
        </form>
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
              <span className="filled">{createStars(item.review)}</span>
              <span className="unfilled">{createUnfilled(item.review)}</span>
              <span className="review-num">{item.reviewNum} reviews</span>
            </div>
            <div className="price">{item.price}</div>
            <div className="size">
              <SizeSelect />
              <ColorSelect />
            </div>
            <Counter />
          </div>
          <div className="detail-info">
            <div className="review-detail" />
            <div className="description-detail" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
