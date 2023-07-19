import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button m-5 bg-red-500 text-white py-2 px-4 rounded border border-black hover:bg-red-700"
        onClick={goToPreviousImage}
      >
        Previous
      </button>

      <img
        className="carousel__image ml-5"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <button
        className="carousel__button m-5 bg-green-500 text-white py-2 px-4 rounded border border-black hover:bg-green-700"
        onClick={goToNextImage}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
