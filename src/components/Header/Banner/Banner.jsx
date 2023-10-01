import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="mt-4 relative">
      <div className="relative">
        <img className="rounded-lg" src={banner} alt="" />
        <div className="bg-white absolute inset-0 center cover opacity-90 rounded-lg"></div>
      </div>
      <div className="absolute inset-0 top-[20%] md:top-[30%]">
        <h2 className="text-center text-black text-lg md:text-4xl font-bold mb-2 md:mb-6">
          I Grow By Helping People In Need
        </h2>
        <div className="flex justify-center center">
          <input
            className="rounded-l-md py-1 md:py-2 px-4 md:px-16 lg:px-20"
            type="text"
            name=""
            id=""
            placeholder="Search here..."
          />
          <button className="bg-[#FF444A] px-1 md:px-3 py-1 md:py-2 rounded-r-md text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
