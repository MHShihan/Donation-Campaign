import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "../../components/CardContainer/CardDetails";

const DonationDetails = () => {
  const [card, setCard] = useState();

  const { id } = useParams();
  //   console.log(id);

  const cards = useLoaderData();
  //   console.log(cards);

  useEffect(() => {
    const findCard = cards?.find((card) => parseInt(card.id) === parseInt(id));
    setCard(findCard);
  }, [id, cards]);
  console.log(card);
  return (
    <div>
      <CardDetails card={card}></CardDetails>
    </div>
  );
};

export default DonationDetails;
