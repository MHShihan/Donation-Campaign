import { useEffect, useState } from "react";
import DonatedItems from "../../components/DonatedItems/DonatedItems";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [notFound, setNotFound] = useState("");

  useEffect(() => {
    const donatedItem = JSON.parse(localStorage.getItem("donations"));

    if (donatedItem) {
      setDonations(donatedItem);
    } else {
      setNotFound("No Data Found");
    }
  }, []);
  console.log(donations);
  console.log(notFound);

  return (
    <div>
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center font-bold text-2xl">
          {notFound}
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {donations.map((card) => (
            <DonatedItems key={card.id} card={card}></DonatedItems>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donation;
