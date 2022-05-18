import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  maincolor1,
  maincolor2,
  maincolor3,
  maincolor4,
}) {
  const [selected, setSelected] = useState(img1);

  const css = `
  button{
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .color1{
    background-image: url(${color1});
  }
  .color2{
    background-image: url(${color2});
  }
  .color3{
    background-image: url(${color3});
  }
  .color4{
    background-image: url(${color4});
  }
  `;

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
          <Link to={`/Cadeaux/:${maincolor1}`}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              value={maincolor1}
              type="button"
              className="color color1"
              onMouseEnter={() => {
                setSelected(img1);
              }}
            />
          </Link>
          <Link to={`/Cadeaux/:${maincolor2}`}>
            <style>{css}</style>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              value={maincolor2}
              type="button"
              className="color color2"
              onMouseEnter={() => {
                setSelected(img2);
              }}
            />
          </Link>
          <Link to={`/Cadeaux/:${maincolor3}`}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              value={maincolor3}
              type="button"
              className="color color3"
              onMouseEnter={() => {
                setSelected(img3);
              }}
            />
          </Link>
          <Link to={`/Cadeaux/:${maincolor4}`}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              value={maincolor4}
              type="button"
              className="color color4"
              onMouseEnter={() => {
                setSelected(img4);
              }}
            />
          </Link>
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
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired,
  color4: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  Price: PropTypes.number.isRequired,
  maincolor1: PropTypes.string.isRequired,
  maincolor2: PropTypes.string.isRequired,
  maincolor3: PropTypes.string.isRequired,
  maincolor4: PropTypes.string.isRequired,
};
