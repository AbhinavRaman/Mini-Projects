import React from "react";
import shoeImage from '../images/shoeIllustration.jpg';

const Hero = () => {
  return (
    <div>
      <div className="w-full bg-[#ecc85a] flex flex-col md:flex-row items-center text-center px-4 md:h-screen">
        {/* Left Section */}
        <div className="left w-full md:w-1/2 flex flex-col items-center justify-center py-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl m-3 font-bold italic">
            Get Ready. <br /> We're opening <br /> soon!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl w-full md:w-3/4 text-center m-6 md:m-10">
            Subscribe to get a coupon code for 20% off your first purchase, sent straight to your inbox.
          </p>
          <div className="buttons flex flex-col w-3/4 md:w-3/4 items-center px-4 md:px-0">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-2 p-3 md:p-4 m-3 rounded-2xl w-full bg-white"
            />
            <button className="border-2 p-3 md:p-4 rounded-2xl w-full font-bold cursor-pointer bg-white hover:bg-gray-200 transition">
              GET THE COUPON
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-full md:w-1/2 flex justify-center items-center p-4 md:p-8">
          <img
            src={shoeImage}
            alt="shoes"
            className="w-3/4 sm:w-2/3 md:w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
