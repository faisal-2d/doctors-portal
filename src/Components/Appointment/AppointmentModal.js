import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({booking, setBooking, date
}) => {

  const formHandler = e => {
    e.preventDefault();     
    const slot = e.target.slot.value;
    console.log(booking.name,slot);
    setBooking(null);
  }
  return (
    <div>         
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div>
              <h3 className="text-center text-2xl">Booking For: {booking.name}</h3>
            <div className='flex justify-center my-10'>               
        <form onSubmit={formHandler} className="grid grid-cols-1 items-center gap-4 w-3/4">
        <input disabled type="text" value={format(date, "PP")} className="input input-bordered" />       
        <select name="slot" className="select select-bordered w-full">              
              {
                booking.slots.map((slot, index) => <option key={index}>{slot}</option>)
              }
        </select>       
        <input name="name" type="text" placeholder="Name" className="input input-bordered" />         
        <input name="email" type="email" placeholder="Email" className="input input-bordered" />         
        <input name="phone" type="text" placeholder="Phone No" className="input input-bordered" />         
        <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        


        </div>              
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
