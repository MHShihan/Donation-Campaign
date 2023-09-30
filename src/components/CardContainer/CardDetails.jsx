import PropTypes from "prop-types";
const CardDetails = ({ card }) => {
  const { image, title, price, description } = card || {};

  const handleAddToDonation = () => {
    // const myValue = JSON.parse(localStorage.getItem("test"));
    // console.log(myValue);

    // const setValue = localStorage.setItem(
    //   "test",
    //   JSON.stringify([{ name: "Shihan" }, { age: 24 }])
    // );

    const donationArray = [];
    const donatedItem = JSON.parse(localStorage.getItem("Donations"));

    if (!donatedItem) {
      donationArray.push(card);
      localStorage.setItem("Donations", JSON.stringify(donationArray));
    } else {
      donationArray.push(...donatedItem, card);
      localStorage.setItem("Donations", JSON.stringify(donationArray));
    }
  };

  return (
    <div>
      <div className="relative">
        <img className="w-full h-auto rounded-lg" src={image} alt="" />
        <div className="absolute inset-x-0 bottom-[0] bg-black opacity-30 h-12 md:h-16 lg:h-24 rounded-b-lg "></div>
        <button
          onClick={handleAddToDonation}
          className="z-10 absolute bottom-[3%] left-10  bg-[#FF444A] px-2 md:px-4 py-1 text-white rounded-md font-semibold md:text-[20px]"
        >
          Donate ${price}
        </button>
      </div>
      <h2 className="text-10 font-bold mt-12 text-black text-4xl">{title}</h2>
      <p className="mt-6 text-black opacity-70 text-justify">{description}</p>
    </div>
  );
};

export default CardDetails;

CardDetails.propTypes = {
  card: PropTypes.object,
};
