import React from "react";
import chair from "../../assets/images/chair.png";
import "./style.css";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl chair" />
          <div>
            <h1 className="text-5xl font-bold  ">
              Your New Smile Strats From Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
