import { useEffect, useState } from "react";
import DonatedItems from "../../components/DonatedItems/DonatedItems";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    const donatedItem = JSON.parse(localStorage.getItem("donations"));

    if (donatedItem) {
      setDonations(donatedItem);
    } else {
      setNotFound("No Data Found");
    }
  }, []);

  // const handleRemoveAll = () => {
  //   localStorage.clear();
  //   setDonations([]);
  //   setNotFound("No Data Found");
  // };
  // console.log(donations);
  // console.log(notFound);

  return (
    <div>
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center font-bold text-2xl">
          {notFound}
        </p>
      ) : (
        <div>
          {/* {donations.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="block mx-auto bg-[#FF444A] px-4 py-1 rounded-sm 
          text-white font-semibold mb-10"
            >
              Remove All
            </button>
          )} */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {isShowAll
              ? donations.map((card) => (
                  <DonatedItems key={card.id} card={card}></DonatedItems>
                ))
              : donations
                  .slice(0, 4)
                  .map((card) => (
                    <DonatedItems key={card.id} card={card}></DonatedItems>
                  ))}
          </div>
          {donations.length > 4 && (
            <button
              onClick={() => setIsShowAll(!isShowAll)}
              className="bg-[#009444] px-4 py-1 text-white font-semibold rounded-sm block mx-auto mt-10"
            >
              {isShowAll ? "Show Less" : "Show All"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
