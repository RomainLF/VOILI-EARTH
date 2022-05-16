import PropTypes from "prop-types";
import SCards from "./style";

export default function Cards({ name, imgface }) {
  return (
    <SCards>
      <section className="mainCard">
        <div className="posimg">
          <img src={imgface} alt="imgfront" />
        </div>
        <div className="Card">{name}</div>
      </section>
    </SCards>
  );
}
Cards.propTypes = {
  imgface: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
