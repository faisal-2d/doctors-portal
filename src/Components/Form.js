import React from 'react';

const Form = () => {
    return (
        <div>
            <h3 className="text-bold text-center text-3xl text-sky-600 mt-32">We want to hear from you</h3>
            <div className='flex justify-center my-10'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body"> 
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Opinion</span>
          </label>
          <textarea type="textArea" placeholder="Your Opinion" className="textarea textarea-bordered" />
          <label className="label">            
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
        
      </div>
    </div>


        </div>
            
        </div>
    );
};

export default Form;