import React from "react";
import doctor from '../../assets/images/doctor.png'
import doctor_bg from '../../assets/images/appointment.png'


const DoctorProfile = () => {
  return (
    <div className="mb-20 mt-72">
      <div style={{background: `url(${doctor_bg})`}}
       className="flex flex-col lg:flex-row items-center">
        <div className="">
          <img
            src={doctor}
            className="max-w-sm rounded-lg mt-[-100px]"
          />
          </div>
          <div className="text-white p-5">
            <h1 className="text-5xl font-bold">Hi There!</h1>
            <p className="py-6">
              I'm heighly trained and very professional doctor. I'm practicing for 15 years.
            </p>           
            <button className="btn btn-primary">Contact Me</button>
          </div>
        
      </div>
    </div>
  );
};

export default DoctorProfile;
