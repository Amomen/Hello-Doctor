import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Rifat",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam ipsam hic pariatur minima expedita veritatis, illum, similique dicta in rem perferendis qui eius modi.",
      img: people1,
    },
    {
      _id: 1,
      name: "Rifat",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam ipsam hic pariatur minima expedita veritatis, illum, similique dicta in rem perferendis qui eius modi.",
      img: people2,
    },
    {
      _id: 1,
      name: "Rifat",
      review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam ipsam hic pariatur minima expedita veritatis, illum, similique dicta in rem perferendis qui eius modi.",
      img: people3,
    },
  ];
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h3 className="text-3xl ">What our patients say</h3>
        </div>
        <div>
          <img src={quote} className="lg:w-48 sm:w-24" alt="" />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Testimonials;
