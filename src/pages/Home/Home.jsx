import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";

const Home = () => {
  const cardData = useLoaderData();
  return (
    <div>
      <h2>I am from Home!</h2>
      <Banner></Banner>
      <div className="mt-10">
        <CardContainer cardData={cardData}></CardContainer>
      </div>
    </div>
  );
};

export default Home;
