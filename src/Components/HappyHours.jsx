import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide01 from '/Common Images/HappyHours_img-1.png'
import slide02 from '/Common Images/HappyHours_img-2.png'
import slide03 from '/Common Images/HappyHours_img-3.png'
import slide04 from '/Common Images/HappyHours_img-4.png'


function HappyHours() {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 1900,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={slide01} />
        </div>
        <div>
          <img src={slide02} />
        </div>
        <div>
          <img src={slide03} />
        </div>
        <div>
          <img src={slide04} />
        </div>
      </Slider>
    </div>
  );
}

export default HappyHours;
