import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center">
      <div className="flex-1">
        <img src={doctor} className="z-40" alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl text-white">Make an appointment today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          inventore?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ullam, ducimus!
        </p>
      </div>
    </section>
  );
};

export default MakeAppointment;
