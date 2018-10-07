import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  createStars() {
    let review = Math.round(this.props.item.review);
    let result = "";
    for (let i = 1; i <= review; i++) {
      result += "★";
    }
    return result;
  }

  createUnfilled() {
    let review = Math.round(this.props.item.review);
    let result = "";
    for (let i = review + 1; i <= 5; i++) {
      result += "★";
    }
    return result;
  }

  render() {
    return (
      <Link to={`/products/${this.props.item._id}`} className="item-link">
        <span className="item-square">
          <div className="img">
            <img src={this.props.item.img} />
          </div>
          <div className="title">{this.props.item.title}</div>
          <div className="size">{this.props.item.size}</div>
          <div className="price">{this.props.item.price}</div>
          <div className="review">
            <span className="filled">{this.createStars()}</span>
            <span className="unfilled">{this.createUnfilled()}</span>
          </div>
        </span>
      </Link>
    );
  }
}

export default ItemDisplay;
