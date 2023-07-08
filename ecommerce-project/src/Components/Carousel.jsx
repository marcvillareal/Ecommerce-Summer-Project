import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./../Components/Carousel.css";
import Images from "./../Components/Images";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  return (
    <>
      <div className="content">
        <div className="container">
          <Slider {...settings}>
            {Images.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} className="img" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
