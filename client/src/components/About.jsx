import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/animation2.json';
import '../App.css';

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <section id="about" style={{ backgroundColor: '#343a40' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mb-5">
              {/* Increased the size of the heading */}
              <h1 className="display-3 custom-margin-top mb-5 fw-bolder mb-4 text-center text-white custom-margin-left">About Us</h1>
              
              {/* Lottie animation on the left side of the text */}
              <div className="d-flex align-items-center">
                <div className="col-md-7">
                  {/* Increased the size of the Lottie animation */}
                  <Lottie options={defaultOptions} style={{ width: '100%', height: '100%' }} />
                </div>
                
                <div className="col-md-6">
                  <p className="lead fs-4 text-white text-start">
                    {/* Increased the size of the text */}
                    Welcome to Dermat-Clinic, where we are dedicated to providing expert care for your skin. Our team of experienced dermatologists is committed to helping you achieve radiant and healthy skin. With our advanced consultation services, we strive to address your skin health needs and unveil your natural beauty.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
