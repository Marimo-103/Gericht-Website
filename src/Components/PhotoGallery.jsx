import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide01 from '/Home Images/Photo_Gallery-img-1.png'
import slide02 from '/Home Images/Photo_Gallery-img-2.png'
import slide03 from '/Home Images/Photo_Gallery-img-3.png'
import slide04 from '/Home Images/Photo_Gallery-img-4.png'
import slide05 from '/Home Images/Photo_Gallery-img-5.png'

function PhotoGallery({className}) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div>
          <img src={slide01} alt="" className="w-full h-full"/>
        </div>
        <div>
          <img src={slide02} alt="" className="w-full h-full"/>
        </div>
        <div>
          <img src={slide03} alt="" className="w-full h-full"/>
        </div>
        <div>
          <img src={slide04} alt="" className="w-full h-full"/>
        </div>
        <div>
          <img src={slide05} alt="" className="w-full h-full"/>
        </div>
        
      </Slider>
    </div>
  );
}

export default PhotoGallery;
