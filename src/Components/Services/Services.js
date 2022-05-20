import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const servicesLlist = [
        {
            _id: 1,
            img: fluoride,
            title: "Fluoride",
            description: "Heighly Trained Doctor"
        },
        {
            _id: 2,
            img: cavity,
            title: "Cavity",
            description: "Heighly Trained Doctor"
        },
        {
            _id: 3,
            img: whitening,
            title: "Whitening",
            description: "Heighly Trained Doctor"
        }
    ]
    return (
        <div className='text-center my-10'>
            <h3 className='text-3xl my-5 text-primary text-bold'>Our Services</h3>
            <h3 className='text-3xl my-10'>Services We Provide</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    servicesLlist.map(item => <ServiceCard
                        key={item._id}
                         item={item}                         
                         ></ServiceCard>)
                 
                }            
            
        </div>
        </div>
    );
};

export default Services;