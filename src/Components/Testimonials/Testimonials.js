import React from 'react';
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const testimonialLlist = [
        {
            _id: 1,
            img: person1,
            name: "Person 1",
            comment: "Heighly Trained Doctor"
        },
        {
            _id: 2,
            img: person2,
            name: "Person 2",
            comment: "Heighly Trained Doctor"
        },
        {
            _id: 3,
            img: person3,
            name: "Person 3",
            comment: "Heighly Trained Doctor"
        }
    ]
    return (
        <div>
            <div className='text-center'>
            <h3 className="text-bold text-primary">Testimonials</h3>
            <h3 className="text-bold text-3xl text-sky-600 mb-20">What our patients say</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    testimonialLlist.map(testimonial => <TestimonialCard
                    key={testimonial._id}
                    testimonial={testimonial}
                    ></TestimonialCard>)
                }
            </div>

        </div>
    );
};

export default Testimonials;