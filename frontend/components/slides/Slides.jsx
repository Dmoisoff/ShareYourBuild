import React from "react";
import Slider from "react-slick";
import {LetsShareDesigns, LetsShareCostumes, LetsShareRecipes, LetsShareTechnology } from './Slides_Text';

class SimpleSlider extends React.Component {
  render() {
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
      <Slider {...settings} className='slide-background' >
        <div>
          <div className=" slider two ">
            <div className='slide-overlay'>
              <LetsShareDesigns  />
            </div>
          </div>
        </div>
        <div className=" slider three">
          <div className='slide-overlay'>
            <LetsShareCostumes  />
          </div>
        </div>
        <div className=" slider one">
          <div className='slide-overlay'>
            <LetsShareRecipes  />
          </div>
        </div>
        <div className=" slider four">
          <div className='slide-overlay'>
            <LetsShareTechnology  />
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
