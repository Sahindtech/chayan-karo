import React from 'react'

const Plan = () => {
  const planData = [
    {
      title: "One-Time Booking",
      text: ["Pick service & provider", "Fixed, transparent pricing", "No hidden fees"],
    },
    {
      title: "Combo Bookings",
      text: ["Book 2+ services, get 10% off"],
    },
    {
      title: "Home Care Plans (Coming Soon)",
      text: ["Monthly/quarterly subscription", "Discounts + free follow-ups"],
    },
    {
      title: "Current Offers",
      text: ["₹100 off for first-time users", "Refer & Earn: ₹150 wallet credits", "Festival grooming deals"],
    }
  ]
  return (
    <div className="work-section-wrapper" id="plans">
      <div className="plan-section-top">
        <p className="primary-subheading">Plan & Offers</p>
        <h1 className="primary-heading" style={{ textAlign: 'center', maxWidth: '900px!important' }}>Plan & Offers We Offer You</h1>
        <p className="primary-text">
          We have various plans and offers for you to choose from. Choose the plan that best suits your needs and enjoy a hassle-free experience.
        </p>
      </div>
      <div className="work-section-bottom">
        <div className="pricing-container">
          {planData.map((plan, index) => (
            <div className="pricing-card" key={index}>
              <h3 className="pricing-title">{plan.title}</h3>
              <ul className="pricing-features">
                {plan.text.map((item, idx) => (
                  <ul key={idx} style={{ textAlign: 'left', marginLeft: '1rem' }}>
                    <li key={idx}>{item}</li>
                  </ul>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Plan