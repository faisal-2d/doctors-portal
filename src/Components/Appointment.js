import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import Info from './Info/Info';
import Services from './Services/Services';

const Appointment = () => {
    return (
        <section className='container mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Hero></Hero>
        </section>
    );
};

export default Appointment;