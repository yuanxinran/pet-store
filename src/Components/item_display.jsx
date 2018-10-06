import React, { Component } from "react";
class ItemDisplay extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="item-squre">
        <div className="img">
          <img src={this.props.item.img} />
        </div>
        <div className="title">{this.props.item.title}</div>
        <div className="size">{this.props.item.size}</div>
        <div className="price">{this.props.item.price}</div>
        <div className="review">{this.props.item.review}</div>
      </div>
    );
  }
}

export default ItemDisplay;
