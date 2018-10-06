import React, { Component } from "react";
import "../styles/scroller.css";
class Scroller extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="scroller">
          <div className="title">Best Seller</div>
          <div className="collections">
            {this.props.items.map(item => (
              <div className="collection-item">
                <div className="img">
                  <img src={item.img} />
                </div>
                <div className="item-title">{item.title}</div>
                <div className="item-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Scroller;
