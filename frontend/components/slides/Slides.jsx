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
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000
    };
    return (
      <Slider {...settings}>
        <div className=" slider two">
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
