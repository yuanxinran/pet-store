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
          {this.props.cats.map(cat => (
            <li>{cat}</li>
          ))}
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
            <dic className="title">Connect With Us</dic>
            <img
              src={require("../imgs/facebook.png")}
              className="social-icon"
            />
            <img
              src={require("../imgs/instagram.png")}
              className="social-icon"
            />
          </div>
          {FooterContents.map(content => (
            <div className="content">
              <div className="title">{content.title}</div>
              <FooterContent cats={content.links} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Footer;
