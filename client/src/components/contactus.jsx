import React, { useState } from 'react';
import '../App.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send the data to a server
    console.log('Form submitted:', formData);
    // You can add your logic for handling the form data, e.g., send it to a server
  };

  return (
    <div>
      <section id="contact" style={{ backgroundColor: '#2c3e50', padding: '50px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-3 custom-margin-top mb-5 fw-bolder mb-4 text-center text-white custom-margin-left">Contact Us</h1>
              
              <form onSubmit={handleSubmit} style={{ border: '2px solid white', padding: '20px', borderRadius: '10px' }}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Enter Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">Enter Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">Enter Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-light">Send Message</button>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
