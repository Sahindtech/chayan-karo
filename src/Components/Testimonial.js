import React from "react";
import { TestimonialData } from '../Constants/Data'
import { Rating } from "@mui/material";
import NextBtn from "./NextBtn";
import PrevButton from "./PrevButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const cards = (data) => {
  const getInitials = (name) => {
    if (!name) return '';
    const parts = name.trim().split(' ');
    const initials = parts[0]?.charAt(0) + (parts[1]?.charAt(0) || '');
    return initials.toUpperCase();
  };
  return (
    <div className="testimonial-section-bottom">
      <div className="initial-circle ">
        {getInitials(data.userName)}
      </div>
      <p>
        {data.review}
      </p>
      <div className="testimonials-stars-container">
        <Rating
          name="simple-controlled"
          value={data.stars}
          readOnly
          classes={{ iconFilled: 'color: #e37d2c' }}
        />
      </div>
      <h2>{data.userName}</h2>
    </div>
  )
}
const Testimonial = () => {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextBtn className="ft-slick__next" icon={ArrowForwardIosIcon} />,
    prevArrow: <PrevButton className="ft-slick__prev" icon={ArrowBackIosIcon} />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div className="work-section-wrapper" id="testimonial">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          See why people choose us for seamless services and unforgettable experiences.
        </p>
      </div>
      <Slider {...settings}>{TestimonialData.map(cards)}</Slider>
    </div>
  );
};

export default Testimonial;