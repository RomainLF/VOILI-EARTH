import PropTypes from "prop-types";
import SCards from "./style";

export default function Cards({ name, img, price, color }) {
  return (
    <SCards>
      <section className="mainCard">
        <div className="posimg">
          <img src={img} alt="imgfront" />
        </div>
        <div className="Card">{name}</div>
        <div>{price}€</div>
        <div className={color}> </div>
      </section>
    </SCards>
  );
}
Cards.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
