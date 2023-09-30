import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { id, image, title, category, category_bg, card_bg, text_color } =
    card || {};

  return (
    <Link to={`/donationDetails/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div
          style={{ backgroundColor: card_bg }}
          className="card-body rounded-b-lg"
        >
          <h4>
            <span
              style={{ backgroundColor: category_bg, color: text_color }}
              className="font-medium px-2 py-1 rounded"
            >
              {category}
            </span>
          </h4>
          <h2
            style={{ color: text_color }}
            className={`card-title text-[20px] font-semibold text p-1 }`}
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.object,
};
