import React from 'react';
import { FaQuestionCircle, FaTicketAlt, FaCreditCard, FaSearchLocation, FaFingerprint } from 'react-icons/fa';
import { RiCalendarScheduleFill } from "react-icons/ri";

const faqItems = [
  {
    icon: <FaQuestionCircle className="faq-icon" />,
    title: 'How is chayankaro.com different?',
    description: 'We let you choose your professional. View profiles, compare prices, read reviews.',
  },
  {
    icon: <FaFingerprint className="faq-icon" />,
    title: 'Are the professionals verified?',
    description: 'Yes. All professionals are verified and have passed a background check.',
  },
  {
    icon: <FaTicketAlt className="faq-icon" />,
    title: 'How to book?',
    description: 'Pick a service, choose a provider, and schedule your service. It’s that simple.',
  },
  {
    icon: <RiCalendarScheduleFill className="faq-icon" />,
    title: 'Can I reschedule/cancel?',
    description: 'Yes, up to 2 hours before appointment.',
  },
  {
    icon: <FaCreditCard className="faq-icon" />,
    title: 'Payment options?',
    description: 'We accept cash, credit/debit cards, and online payments.',
  },
  {
    icon: <FaSearchLocation className="faq-icon" />,
    title: 'Where are you available?',
    description: 'Currently live in Lucknow, expanding soon!',
  },
];

export default function FAQ() {
  return (
    <div className="faq-section">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="primary-heading">FAQ</h1>
        <p className="primary-text">Find the answers for the most frequently asked questions below</p>
      </div>

      <div className="faq-grid">
        {faqItems.map((item, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-header">
              {item.icon}
              <h3 className="faq-question">{item.title}</h3>
            </div>
            <p className="faq-answer">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}