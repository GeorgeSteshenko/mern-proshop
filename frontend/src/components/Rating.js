import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[...Array(5).keys()].map((i) => (
        <span key={i}>
          <i
            style={{ color }}
            className={
              value >= i + 1
                ? "fas fa-star"
                : value >= i + 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span> {text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
