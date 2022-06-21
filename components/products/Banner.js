import React from "react";
import ImageNext from "../../lib/ImageNext";
const Banner = ({ banner }) => {
  return (
    <div className="w-full h-80 mb-10 relative overflow-hidden">
      <div className="absolute w-full h-full bg-black/40 z-10"></div>

      <ImageNext mySanityData={banner.image} />

      <div className="absolute left-0 top-0 w-[80%] h-full bg-gradient-to-r from-black z-10 text-white flex flex-col gap-2 justify-center pl-10">
        <span className="text-lg text-gray-400 uppercase">
          {banner.smallText}
        </span>
        <h1 className="text-4xl uppercase">{banner.midText}</h1>
        <p className="bg-red-600 w-fit px-2 font-bold  py-1 text-5xl rounded-sm uppercase">
          {banner.largeText1}
        </p>

        <button className="border border-white hover:bg-white hover:text-black transition duration-500 w-fit  py-1 px-4 font-medium rounded-sm mt-5">
          {banner.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
