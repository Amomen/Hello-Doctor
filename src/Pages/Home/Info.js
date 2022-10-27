import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import Infocard from "./Infocard";

const info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto py-10 px-12">
      <Infocard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary sm:text-center"
        img={clock}></Infocard>
      <Infocard
        cardTitle="Our Location"
        bgClass="bg-gradient-to-r from-secondary to-neutral sm:text-center"
        img={marker}></Infocard>
      <Infocard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary sm:text-center"
        img={phone}></Infocard>
    </div>
  );
};

export default info;
