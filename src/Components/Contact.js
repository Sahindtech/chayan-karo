import React, { useState } from "react";
import { Snackbar, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertSeverity, setAlertSeverity] = React.useState('success'); // 'success' by default

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    setFormErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);

    // ✅ Only submit if no errors
    if (Object.keys(errors).length === 0) {
      fetch('https://script.google.com/macros/s/AKfycbwDwNbEHQGQ7jZkDgS-XZwFUAHyVtQgNIOIS-dBzf2bCowYai0YWiJ-1kjL6JNHei3HBw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(() => {
          setFormData({ name: '', email: '', phone: '', message: '' });
          setAlertMessage('Your request has been sent successfully!');
          setAlertSeverity('success');
          setOpenAlert(true);
        })
        .catch((error) => {
          setAlertMessage('Something went wrong, Please try again later!');
          setAlertSeverity('error');
          setOpenAlert(true);
          console.error('Error!', error.message);
        });
    }
  };


  return (
    <div className="contact-page-wrapper" id="contacts">
      <p className="primary-subheading">Contact Us</p>
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: '700px', marginTop: '2rem', width: '100%' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${formErrors.name ? 'error-border' : ''}`}
          />
          <div className="error-text">
            {formErrors.name || '\u00A0'}
          </div>

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${formErrors.email ? 'error-border' : ''}`}
          />
          <div className="error-text">
            {formErrors.email || '\u00A0'}
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-input ${formErrors.phone ? 'error-border' : ''}`}
          />
          <div className="error-text">
            {formErrors.phone || '\u00A0'}
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className={`form-input ${formErrors.message ? 'error-border' : ''}`}
          />
          <div className="error-text">
            {formErrors.message || '\u00A0'}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              className="secondary-button"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Snackbar with Alert at the bottom-left */}
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          onClose={() => setOpenAlert(false)}
          severity={alertSeverity} // Dynamically set severity (success or error)
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
