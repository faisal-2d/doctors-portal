import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import AppointmentModal from './AppointmentModal';

const AvailabelAppointments = ({date}) => {
    const [appointments, setAppointments] = useState([]);
    const [booking, setBooking] = useState(null);
    useEffect(()=> {
        axios.get('appointments.json')
        .then(data => setAppointments(data.data))
    },[])
    console.log(booking);
    return (
        <div>
            <div className='text-center'>
            <h3 className='text-xl my-5 text-primary text-bold'>Appointments </h3>
            <h3 className='text-3xl my-10'>Appointment on {format(date, "PP")}</h3>
            <h3 className='text-xl text-bold'>You have Appointments {appointments.length}</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    appointments.map(appointment => <AppointmentCard
                    key={appointment._id}
                    setBooking={setBooking}
                    appointment={appointment}
                    ></AppointmentCard>)
                }
            </div>
            {booking && <AppointmentModal booking={booking}></AppointmentModal>}
        </div>
    );
};

export default AvailabelAppointments;