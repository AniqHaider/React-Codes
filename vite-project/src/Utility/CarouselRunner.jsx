import React from "react";
import Carousel from "../components/Carousel";

const CarouselRunner = () => {
  const images = [
    "https://picsum.photos/203",
    "https://picsum.photos/201",
    "https://picsum.photos/202",
    "https://picsum.photos/200",
    "https://picsum.photos/204",
  ];

  return (
    <div className="mt-4 mb-4 mr-20 ml-10">
      <hr className="mt-5 mb-5" />
      <h1>Carousel Example</h1>
      <Carousel images={images} />
      <hr className="mt-7 mb-8" />
    </div>
  );
};

export default CarouselRunner;
