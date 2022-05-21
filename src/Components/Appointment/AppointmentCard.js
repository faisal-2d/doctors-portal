import React from "react";
import AppointmentModal from "./AppointmentModal";

const AppointmentCard = ({ appointment , setBooking}) => {
  return (
    <div className="card lg:max-h-lg bg-base-100 shadow-xl text-center">
      <div className="card-body text-center">
        <h2 className="text-xl fornt-bold">{appointment.name}</h2>
        <p>{appointment.slots.length} {appointment.slots.length >1 ? "spaces":"space"} available</p>
        <p>{appointment.slots.length >1 ? 
        <span>{appointment.slots[0]}</span>
        :
        <span className="text-red-500">Try another day</span>
        }</p>
        <div className="card-actions justify-center">            
          <label htmlFor="booking-modal" disabled={appointment.slots.length === 0} onClick={()=> setBooking(appointment)} className="btn btn-primary modal-button">Book Appointment</label>          
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
