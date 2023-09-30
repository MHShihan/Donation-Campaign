import PropTypes from "prop-types";

const DonatedItems = ({ card }) => {
  const { image, card_bg, text_color, category_bg, category, title, price } =
    card;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl mx-4 md:mx-10 lg:mx-0 ">
      <div className="flex flex-col md:flex-row">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div
          style={{ backgroundColor: card_bg }}
          className="card-body rounded-b-lg md:rounded-r-lg"
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
            className={`card-title text-black text-lg md:text-2xl font-medium md:font-semibold text p-1 }`}
          >
            {title}
          </h2>
          <h4 style={{ color: text_color }}>${price}.00</h4>
          <button
            style={{ backgroundColor: text_color }}
            className="w-[50%] px-1 py-1 text-white font-semibold rounded-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonatedItems;

DonatedItems.propTypes = {
  card: PropTypes.object,
};
