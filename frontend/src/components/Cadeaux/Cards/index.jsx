import PropTypes from "prop-types";
import { useState } from "react";
import SCards from "./style";

export default function Cards({
  Name,
  img1,
  img2,
  img3,
  img4,
  color1,
  color2,
  color3,
  color4,
  Price,
}) {
  const [selected, setSelected] = useState(img1);

  return (
    <SCards>
      <section className="mainCard">
        <div className="posimg">
          <img src={selected} alt="imgfront" />
        </div>
        <p>T-Shirt Voili Earth</p>
        <div className="Card">{Name}</div>
        <div className="Price">{Price},99 €</div>
        <div className="MainColor">
          <img
            src={color1}
            value={color1}
            alt="color1"
            className="color"
            onMouseEnter={() => {
              setSelected(img1);
            }}
          />
          <img
            src={color2}
            value={color2}
            alt="color2"
            className="color"
            onMouseEnter={() => {
              setSelected(img2);
            }}
          />
          <img
            src={color3}
            alt="color3"
            className="color"
            onMouseEnter={() => {
              setSelected(img3);
            }}
          />
          <img
            src={color4}
            alt="color4"
            className="color"
            onMouseEnter={() => {
              setSelected(img4);
            }}
          />
        </div>
      </section>
    </SCards>
  );
}
Cards.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  img4: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired,
  color4: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
};
