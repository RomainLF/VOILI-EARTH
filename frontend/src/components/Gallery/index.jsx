import React from "react";
import SGallery from "./style";
import img1 from "../pictures/pictos/northface.jpeg";
import img2 from "../pictures/pictos/imgTNFbig.jpeg";
import Carousel from "./Carousel";

export default function Gallery() {
  return (
    <SGallery>
      <div className="main">
        <div className="first_category">
          <picture>
            <source srcSet={img2} media="(min-width: 640px)" className="img2" />
            <img src={img1} alt="img1" className="img1" />
          </picture>
          <div className="attribute_video">
            <div className="wrapper">
              <div className="title">
                <h2>En phase avec les éléments.</h2>
                <div className="big_suggestion">
                  <div className="suggestion1 suggestion">
                    Vestes impermeables Homme
                  </div>
                  <div className="suggestion2 suggestion">
                    Vestes impermeables Femme
                  </div>
                </div>
              </div>
              <div className="center_video">
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  autoPlay="autoplay"
                  loop="loop"
                  muted="muted"
                  playsInline="playsinline"
                  poster="https://s7d2.scene7.com/is/image/TheNorthFaceEU/2022_w52_hp_main1_rainy_ani?$SCALE-ORIGINAL$"
                >
                  <source src="https://images.thenorthface.com/is/content/TheNorthFaceEU/2022_w52_hp_main1_rainy_ani" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="main_category">
          <div className="div_button">Vestes impermeables Homme</div>
          <div className="div_button">Vestes impermeables Femme</div>
        </div>
        <Carousel />
      </div>
    </SGallery>
  );
}
