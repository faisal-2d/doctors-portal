import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import AppointmentBanner from "./AppointmentBanner";
import AvailabelAppointments from "./AvailabelAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());


  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailabelAppointments date={date}></AvailabelAppointments>
    </div>
  );
};

export default Appointment;
