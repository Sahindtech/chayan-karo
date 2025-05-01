import React from "react";
import ChooseService from "../Assets/choose-service.svg";
import SelectProvider from "../Assets/select-provider.svg";
import BookAndRelax from "../Assets/book-relax.svg";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseService,
      title: "Choose a Service",
      text: "Pick from a wide range of home and beauty services, tailored to your needs.",
    },
    {
      image: SelectProvider,
      title: "Select Your Provider",
      text: "Browse verified professionals, check ratings, and select the best fit for you.",
    },
    {
      image: BookAndRelax,
      title: "Book & Relax",
      text: "Schedule your service at your convenience and enjoy a hassle-free experience.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          At <a href="https://chayankaro.com/" target="_blank" className="primary-link" rel="noreferrer">chayankaro.com</a>, booking a service is simple, transparent, and stress-free.
          We empower you to choose exactly what you need — with the right professional — at your convenience.
          Enjoy trusted services, seamless booking, and complete peace of mind, all from the comfort of your home.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;