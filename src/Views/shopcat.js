import React, { Component } from "react";
import Scroller from "../Components/scroll";
import Carousel from "../Components/carousel";
import "../styles/shoppet.css";
import { getPopularItems } from "../Components/item";

class ShopCat extends Component {
  state = {
    items: getPopularItems(6)
  };
  render() {
    return (
      <React.Fragment>
        <div className="carousel-container">
          <Carousel img={require("../imgs/shopcat.png")} />
        </div>
        <div className="shop-pet-title">All Products</div>
        <div className="shop-pet-category">
          <div className="cat">
            <div className="content">
              <div className="title">Harness</div>
              <div className="img">
                <img src={require("../imgs/harness.png")} />
              </div>
            </div>
          </div>
          <div className="cat">
            <div className="content">
              <div className="title">Bagpack</div>
              <div className="img">
                <img src={require("../imgs/cat1.png")} />
              </div>
            </div>
          </div>
          <div className="cat">
            <div className="content">
              <div className="title">Food/Water Container</div>
              <div className="img">
                <img src={require("../imgs/container.png")} />
              </div>
            </div>
          </div>
          <div className="cat">
            <div className="content">
              <div className="title">GPS</div>
              <div className="img">
                <img src={require("../imgs/GPS.png")} />
              </div>
            </div>
          </div>
        </div>
        <div className="scroller-container">
          <Scroller title="Best Seller" items={this.state.items} />
        </div>

        <div className="community-footer-title">Cats Community</div>
        <div className="community-footer">
          <div className="img">
            <img src={require("../imgs/maomao.jpg")} />
          </div>
          <div className="card-story">
            <div className="content">
              <div className="title">MaoMao - 2 years old </div>
              <div>
                Hi My name is MaoMao. I love playing out side. I love Muddy Paws
                products. They are really comfortable to wear with. Come and see
                my photos. Share your photos with me as well!
              </div>
            </div>
          </div>
          <div className="community">
            <div className="txt">
              Come and Explore what other cats and dogs are doring! Share your
              story with us!
            </div>
            <div class="link">
              <button className="purple">Explore Community</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShopCat;
