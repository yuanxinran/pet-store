import React, { Component } from "react";
import "../styles/filter.css";

const filters = [
  {
    title: "Pet Tyle",
    categories: ["Dogs", "Cats"]
  },
  {
    title: "Size",
    categories: ["Small", "Medium", "Large"]
  },
  {
    title: "Product",
    categories: [
      "harness",
      "bagpack",
      "Food storage attachment",
      "Water storage attachment",
      "GPS"
    ]
  }
];

class FilterCat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <form>
          {this.props.categories.map(function(cat, i) {
            return (
              <div className="filter-category" key={i}>
                <input className="input" type="checkbox" id={cat} />
                <label className="label" for={cat}>
                  {cat}
                </label>
              </div>
            );
          })}
        </form>
      </React.Fragment>
    );
  }
}

class Filter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {filters.map(function(filter, i) {
          return (
            <React.Fragment key={i}>
              <div className="filter-title">{filter.title}</div>
              <FilterCat categories={filter.categories} />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

class SideFilter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="side-filter">
          <div className="title">FILTER BY</div>
          <Filter />
        </div>
      </React.Fragment>
    );
  }
}

export default SideFilter;
