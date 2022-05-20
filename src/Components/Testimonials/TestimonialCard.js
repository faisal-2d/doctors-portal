import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, et. Alias molestias expedita dolore non.</p>
      <div className="flex items-center mt-4">
        <div className="avatar p-3">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img className="w-8" src={testimonial.img} />
          </div>
        </div >
        <div className="mx-2">
        <h2 className="card-title">{testimonial.name}</h2>
        <p>Bangladesh</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
