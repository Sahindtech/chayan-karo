import React from 'react';
import acRepair from '../Assets/Service/ac-repair.png';
import beautiSalon from '../Assets/Service/beauti-salon.png';
import pestControl from '../Assets/Service/pest-control.png';
import carpenterService from '../Assets/Service/carpenter-service.png';

const Service = () => {
  const serviceData = [
    {
      image: acRepair,
      title: "AC Services",
      text: ["Servicing, repair, installation, gas refill", "Compare expert ratings and prices"],
    },
    {
      image: beautiSalon,
      title: "Beauty & Wellness",
      text: ["Salon, spa, grooming – hygiene assured", "Women & men's services"],
    },
    {
      image: pestControl,
      title: "Pest Control",
      text: ["Termites, cockroaches, bed bugs, mosquitoes", "Eco-safe treatments available"],
    },
    {
      image: carpenterService,
      title: "Carpenter Services",
      text: ["Repairs, assembly, modular woodwork", "Hourly and project-based options"],
    }
  ];

  return (
    <div className="service-wrapper" id="services">
      <div className="service-header">
        <p className="primary-subheading">Service</p>
        <h1 className="primary-heading">Services We Offer</h1>
        <p className="primary-text" style={{ maxWidth: '800px', marginBottom: '7rem' }}>
          We offer a wide range of services to meet your needs. Whether you need home repair, beauty services, pest control, or carpentry, we have you covered.
        </p>
      </div>
      <div className="service-grid">
        {serviceData.map((data) => (
          <div className="service-card" key={data.title}>
            <div className="service-image-container">
              <img src={data.image} alt={data.title} className="service-image" />
            </div>
            <h2 className="service-name">{data.title}</h2>
            <ul className="service-features">
              {data.text.map((item, idx) => (
                <ul style={{ textAlign: 'left' }} key={idx}>
                  <li key={idx}>{item}</li>
                </ul>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
