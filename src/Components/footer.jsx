import React, { Component } from "react";

const FooterContents = [
  {
    title: "About Us",
    links: ["Our Story", "Contact Us", "News"]
  },
  {
    title: "Term Of Use",
    links: ["Payment Method", "Shipping", "Refund Policy", "Product Review"]
  },
  {
    title: "Customer Service",
    links: ["FAQ", "Social Media", "Online Help", "Quality Guarantee"]
  }
];

class FooterContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <ul className="links">
          {this.props.cats.map(function(cat, i) {
            return <li key={i}>{cat}</li>;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="collections">
          <div className="content">
            <div className="title">Connect With Us</div>
            <img
              src={require("../imgs/facebook.png")}
              className="social-icon"
            />
            <img
              src={require("../imgs/instagram.png")}
              className="social-icon"
            />
          </div>
          {FooterContents.map(function(content, i) {
            return (
              <div className="content" key={i}>
                <div className="title">{content.title}</div>
                <FooterContent cats={content.links} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Footer;
