import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    // debugger
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true
    };
    return (
      <Slider {...settings}>
        <div>
          <div className=" slider two">
            <p classname='slide-share'>Share Your</p>
          </div>
        </div>
        <div className=" slider three">
        </div>
        <div className=" slider one">
        </div>
        <div className=" slider four">
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
