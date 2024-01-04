import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../public/animation.json';
import '../App.css'
import { NavLink } from 'react-router-dom';
const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      
  return (
    <div>
        <section id="home">
            <div className="comtainerb">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <h1 className="display-4 custom-margin-top mb-5 fw-bolder mb-4 text-left text-white custom-margin-left">Radiant Skin, Expert Care: Unveil Your Beauty with Our Dermatology Consultation Services ✨🌿 </h1>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink className="btn bg-white me-4 rounded-pill px-4 py-2 nav-link active ms-4 fs-4 text-black " aria-current="page" to="/shelf">Book Appointment</NavLink>
                            </div>
                    </div>
                    <div className="col-md-4 mt-5">
            <Lottie options={defaultOptions} />
          </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home