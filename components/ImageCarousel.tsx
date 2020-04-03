import React from "react";
import { Carousel } from "react-responsive-carousel";
import { NextComponentType } from "next";

const ImageCarousel: NextComponentType = () => {
  return (
    <div>
      <p>here are images</p>
      <Carousel>
        <div>
          <img src="/images/harley.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/images/people.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/images/girl.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
