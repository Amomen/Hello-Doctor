import React from "react";
import treatment from "../../assets/images/treatment.png";
import Button from "../Shared/Button";
const ServicesCard = () => {
  return (
    <div className="card rounded-none lg:card-side mt-10 flex">
      <figure className="flex-1">
        <img src={treatment} className="h-96 rounded-md" alt="Album" />
      </figure>
      <div className="card-body justify-center items-center flex-1">
        <h2 className="card-title text-3xl">
          Exceptional Dental Care, on Your Terms
        </h2>
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
    </div>
  );
};

export default ServicesCard;
