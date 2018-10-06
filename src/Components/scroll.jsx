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
            <div className="scroll-button">
              <button className="p-button--base">&#9664;</button>
            </div>
            {this.props.items.map(function(item, i) {
              return (
                <div className="collection-item" key={i}>
                  <div className="img">
                    <img src={item.img} />
                  </div>
                  <div className="item-title">{item.title}</div>
                  <div className="item-price">{item.price}</div>
                </div>
              );
            })}
            <div className="scroll-button">
              <button className="p-button--base">&#9654;</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Scroller;
