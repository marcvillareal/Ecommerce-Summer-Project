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
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    cssEase: "linear",
  };
  return (
    <>
      <div className="content">
          <Slider {...settings}>
            {Images.map((item) => (
              <div key={item.id}>
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ userSelect: "none", pointerEvents: "none" }}
                  className="img"
                />
              </div>
            ))}
          </Slider>
      </div>
    </>
  );
};
