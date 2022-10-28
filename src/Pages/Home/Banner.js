import React from "react";
import chair from "../../assets/images/chair.png";
import Button from "../Shared/Button";
import "./style.css";
const Banner = () => {
  return (
    <div className="card rounded-none lg:card-side mt-10 flex py-10 ">
      <div className="card-body justify-between items-center flex-1">
        <h2 className="card-title text-3xl">Your Smile Starts From Here</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <Button></Button>
      </div>
      <figure className="flex-1">
        <img src={chair} className="h-80 rounded-md" alt="Album" />
      </figure>
    </div>
  );
};

export default Banner;
