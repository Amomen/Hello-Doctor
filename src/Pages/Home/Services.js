import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
import ServicesCard from "./ServicesCard";
const Services = () => {
  const services = [
    {
      _id: 1,
      name: "fluoride treatment",
      description: "",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "teeth whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="uppercase">
        <h3 className="text-center text-xl font-bold text-primary">
          Our services
        </h3>
        <h2 className="text-4xl">Services we provide</h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <ServicesCard></ServicesCard>
    </div>
  );
};

export default Services;
