import React from "react";
import ImageCarousel from "../../components/ImageCarousel";
import { NextPage } from "next";

const CarouselPage: NextPage = () => {
  return (
    <div>
      <h1>Carousel</h1>
      <ImageCarousel />
    </div>
  );
};

export default CarouselPage;
