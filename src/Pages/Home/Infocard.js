import React from "react";

const Infocard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="pl-5">
        <img src={img} className="sm:mx-auto my-2" alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title text-white sm:text-center">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default Infocard;
