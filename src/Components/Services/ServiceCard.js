import React from 'react';

const ServiceCard = ({item}) => {
    return (
        <div className={`card bg-base-100 shadow-xl p-4 `}>
  <figure><img className='w-20' src={item.img} alt="Album" /></figure>
  <div className="card-body">
    <h2 className='text-xl text-sky-500'>{item.title}</h2>
    <p>{item.description}</p>    
  </div>
</div>
    );
};

export default ServiceCard;