import Card from "./Card";
import PropTypes from "prop-types";

const CardContainer = ({ cardData }) => {
  //   console.log(cardData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData?.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cardData: PropTypes.array,
};
