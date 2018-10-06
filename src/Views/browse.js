import React, { Component } from "react";
import "../styles/browse.css";
import SideFilter from "../Components/filter";
import { getItems } from "../Components/item";
import ItemDisplay from "../Components/item_display";

// class ItemRow extends Component {
//   constructor(props){
//     super(props)
//   };
//   render() {
//     return ();
//   }
// }

class Browse extends Component {
  state = {
    items: getItems()
  };
  render() {
    return (
      <React.Fragment>
        <div className="filter-area">
          <SideFilter />
        </div>
        <div className="browse-area">
          <div className="top-area">
            <div className="state-inform">
              You are viewing all products for cats.
            </div>
            <div className="sort-bar">
              <div className="sort-content">
                <select>
                  <option />
                  <option value="Review High to Low">Review High to Low</option>
                  <option value="Price Low to High">Price Low to High</option>
                  <option value="Price High to Low">Price High to Low</option>
                </select>
                <span>Sort By:</span>
              </div>
            </div>
          </div>
          <div className="content">
            {this.state.items.map(function(item, i) {
              return (
                <div className="item-container">
                  <ItemDisplay item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Browse;
