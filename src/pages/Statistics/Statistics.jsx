import { useLoaderData } from "react-router-dom";
import PieChartComponent from "../../components/PieChartComponent/PieChartComponent";

const Statistics = () => {
  const cardData = useLoaderData();

  return (
    <div className="flex justify-center items-center">
      <PieChartComponent cardData={cardData}></PieChartComponent>
    </div>
  );
};

export default Statistics;
