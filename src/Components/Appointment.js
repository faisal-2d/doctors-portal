import React from 'react';
import Banner from './Banner';
import DoctorProfile from './DoctorProfile';
import Form from './Form';
import Hero from './Hero';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';


const Appointment = () => {
    return (
        <section className='container mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Hero></Hero>
            <DoctorProfile></DoctorProfile>
            <Testimonials></Testimonials>
            <Form></Form>
        </section>
    );
};

export default Appointment;