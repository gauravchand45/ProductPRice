import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa'; 
import React, { useState } from 'react';
import './ContactUsPage.css'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    
    
  };
  return (
    <div className="contact-us-container">
      <a href="/" className="logo-link">
      <img src="/price.png" alt="Logo" className="logo" style={{ width: '150px', height: 'auto' }} />
      </a>
      <h2 className="contact-us-heading">Contact Us</h2>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FaComment className="icon" />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
  
}

export default ContactUs