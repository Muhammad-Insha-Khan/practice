import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'; // Custom CSS

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows
    appendArrows: '.slider-nav', // Append arrows to a custom container
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-slide">
          <img src="https://www.researchgate.net/profile/Harriet-Fell/publication/221538154/figure/fig1/AS:276824299982849@1443011464386/Original-Image-showing-200-x-200-pixels.png" alt="Slide 1" />
        </div>
        <div className="slider-slide">
          <img src="https://www.researchgate.net/profile/Harriet-Fell/publication/221538154/figure/fig1/AS:276824299982849@1443011464386/Original-Image-showing-200-x-200-pixels.png" alt="Slide 2" />
        </div>
        <div className="slider-slide">
          <img src="https://www.researchgate.net/profile/Harriet-Fell/publication/221538154/figure/fig1/AS:276824299982849@1443011464386/Original-Image-showing-200-x-200-pixels.png" alt="Slide 3" />
        </div>
      </Slider>
      <div className="slider-nav" />
    </div>
  );
};

export default ImageSlider;
