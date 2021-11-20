import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sdg1 from "../../Resources/Images/sdg1.png";
import sdg2 from "../../Resources/Images/sdg2.png";
import sdg3 from "../../Resources/Images/sdg3.png";
import sdg4 from "../../Resources/Images/sdg4.png";
import sdg13 from "../../Resources/Images/sdg13.png";
import sdg17 from "../../Resources/Images/sdg17.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Gallery() {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      infinite={true}
      responsive={responsive}
      transitionDuration={2000}
      autoPlay={true}
      autoPlaySpeed={1000}
    >
      <img src={sdg1} width="500px" />
      <img src={sdg2} width="500px" />
      <img src={sdg3} width="500px" />
      <img src={sdg4} width="500px" />
      <img src={sdg13} width="500px" />
      <img src={sdg17} width="500px" />
    </Carousel>
  );
}
