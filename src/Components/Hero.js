import React from 'react';
import treatment from '../assets/images/treatment.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="img-fluid lg:max-w-sm rounded-lg shadow-2xl" />
    <div className='px-12'>
      <h1 className="text-5xl font-bold">Treatment With Care!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Hero;