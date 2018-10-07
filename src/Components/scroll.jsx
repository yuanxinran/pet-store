import React, { Component } from "react";
import "../styles/scroller.css";
import { Link } from "react-router-dom";

class Scroller extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="scroller">
          <div className="title">{this.props.title}</div>

          <div className="collections">
            <div className="scroll-button">
              <button className="p-button--base">&#9664;</button>
            </div>
            {this.props.items.map(function(item, i) {
              return (
                <div className="collection-item" key={i}>
                  <div className="img">
                    <Link to={`/products/${item._id}`}>
                      <img src={item.img} />
                    </Link>
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
