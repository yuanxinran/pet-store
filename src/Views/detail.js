import React, { Component } from "react";
import "../styles/detail.css";
import { getItem } from "../Components/item.js";

const ItemReviews = [
  {
    review: 5,
    time: "2017-7-1",
    text:
      "My cat love this bag so much!!! This is an item that worth buying, especially if you have a cat who loves going out! My cat just love to stay in it. "
  },
  {
    review: 5,
    time: "2018-1-5",
    text:
      "Great product. It looks the same as the picture above. I got the navy blue one and it looks really greate. Highly recommended. "
  },
  {
    review: 4,
    time: "2018-5-12",
    text:
      "Nice and standard cat bagpack. The item is a little bit expendsive though. :("
  },
  {
    review: 4,
    time: "2018-9-8",
    text:
      "My cat love this bag so much!!! This is an item that worth buying, especially if you have a cat who loves going out! My cat just love to stay in it. "
  },
  {
    review: 4.5,
    time: "2018-4-23",
    text:
      "Great product. It looks the same as the picture above. I got the navy blue one and it looks really greate. Highly recommended. "
  },
  {
    review: 5,
    time: "2017-9-2",
    text:
      "Great product. It looks the same as the picture above. I got the navy blue one and it looks really greate. Highly recommended. "
  }
];

function createStars(review) {
  review = Math.round(review);
  let result = "";
  for (let i = 1; i <= review; i++) {
    result += "★";
  }
  return result;
}

function createUnfilled(review) {
  review = Math.round(review);
  let result = "";
  for (let i = review + 1; i <= 5; i++) {
    result += "★";
  }
  return result;
}

function getReviewCat(level) {
  let star = level[0];
  let people = level[1];
  return (
    <div className="cat">
      <span className="cat-stars">
        <span className="filled">{createStars(star)}</span>
        <span className="unfilled">{createUnfilled(star)}</span>
      </span>
      <span className="people">{people}</span>
    </div>
  );
}

function getReviews(review) {
  return (
    <div className="review-list-element">
      <div>
        <span className="filled">{createStars(review.review)}</span>
        <span className="unfilled">{createUnfilled(review.review)}</span>
      </div>
      <div className="review-txt">{review.text}</div>
    </div>
  );
}

class ReviewDetail extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    levels: [[5, 132], [4, 44], [3, 23], [2, 34], [1, 10]]
  };

  render() {
    let review = this.props.review;
    return (
      <div className="review-container">
        <div className="content">
          <div className="title">Reviews</div>
          <div className="header">
            <div className="average">
              <div className="num">{review}</div>
              <span className="filled">{createStars(review)}</span>
              <span className="unfilled">{createUnfilled(review)}</span>
            </div>
            <div className="review-cat">
              {this.state.levels.map(function(level, i) {
                return (
                  <React.Fragment key={i}>{getReviewCat(level)}</React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="review-list">
            {ItemReviews.map(function(r, i) {
              return <React.Fragment key={i}>{getReviews(r)}</React.Fragment>;
            })}
          </div>
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
        <img width="48" height="100" src={require("../imgs/red.png")} />
        <img width="48" height="100" src={require("../imgs/navy.png")} />
        <img width="48" height="100" src={require("../imgs/blue.png")} />
        <img width="48" height="100" src={require("../imgs/yellow.png")} />
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

          <div className="product-img">
            <img src={item.img} />
          </div>
          <div className="product-img-small">
            <img className="active" src={item.img} />
            <img src={require("../imgs/small1.png")} />
            <img src={require("../imgs/small2.png")} />
            <img src={require("../imgs/small3.png")} />
          </div>
          <div className="product-description">
            <div className="title">{item.title}</div>
            <div className="subtitle">{item.subtitle}</div>
            <div className="review">
              <span className="filled">{createStars(item.review)}</span>
              <span className="unfilled">{createUnfilled(item.review)}</span>
              <span className="review-num">{item.reviewNum} reviews</span>
            </div>
            <div className="price">{item.price}</div>
            <div className="size">
              <div className="selector-label">Select Size</div>
              <SizeSelect />
              <div className="selector-label">Select Color</div>
              <ColorSelect />
            </div>
            <div className="actions">
              <div className="selector-label">Quantity</div>
              <Counter />
              <button className="cart-btn">Add To Cart</button>
            </div>
          </div>
          <div className="detail-info">
            <div className="review-detail">
              <ReviewDetail review={item.review} />
            </div>
            <div className="description-detail">
              <div className="title">Product Detail</div>
              <ul className="feature-list">
                <li>
                  Chest Girth 16.5-21.5", Chest Strap 4.7", Width 5/8", Small;
                  The chest strap is not adjustable. For a safe and fit
                  purchase, be sure to check the neck and chest; A properly
                  fitting collar and harness won't leave any room for your dog
                  to chew.
                </li>
                <li>
                  The harness does not stretch itself. NEVER leave your dog
                  unattended with a harness on.
                </li>
                <li>
                  Classy style in a handpicked trendy Emerald color. Nylon
                  fabric with high density webbing to add durability.
                </li>
                <li>
                  This harness is a single product. Its matching collar
                  (B00HWQNJ2G) /leash (B00HRQGP40) sold separately
                </li>
                <li>
                  All pictures are taken with our production samples from a size
                  3/4"(wide) * 20-26"(chest).
                </li>
              </ul>

              <div className="title">Size Table</div>

              <table className="size-table">
                <tr>
                  <th>Size</th>
                  <th>Metircs</th>
                  <th>Pet Size</th>
                </tr>
                <tr>
                  <td>Small</td>
                  <td>11.8''x9.8''x13.8''</td>
                  <td>small dog/cat</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>11.8''x10''x15''</td>
                  <td>medium dog/catt</td>
                </tr>
                <tr>
                  <td>Large</td>
                  <td>13''x10''x15''</td>
                  <td>large cat</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Detail;
