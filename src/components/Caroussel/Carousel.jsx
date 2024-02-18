import React, { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="mt-6 mx-8 w-[1000px] h-[300px] relative overflow-hidden">
      <div className="carousel-inner h-full flex transition-all duration-500 ease-in-out transform" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        <div className="w-full h-full flex-shrink-0">
          <img
            src="https://wp-pa.phonandroid.com/uploads/2023/09/iPhone15Pro.jpg"
            alt="Los Angeles"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-full flex-shrink-0">
          <img
            src="https://www.apple.com/v/iphone/home/bp/images/meta/iphone__ky2k6x5u6vue_og.png"
            alt="Chicago"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-full flex-shrink-0">
          <img
            src="https://t.ctcdn.com.br/RzJ7B8QA1eMPl0Kfp5AGd6I5KbM=/1200x675/smart/i464481.jpeg"
            alt="New york"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center cursor-pointer"
        onClick={handlePrev}
      >
        {"<"}
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center cursor-pointer"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
