import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({date, setDate}) => {

    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p>You picked {format(date, "PP")}.</p>;
    }
    return (
        <div>
            <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img
              src={chair}
              className="img-fluid lg:max-w-lg rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              footer={footer}
            />
          </div>
        </div>
      </div>
        </div>
    );
};

export default AppointmentBanner;