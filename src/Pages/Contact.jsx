import React, { useState } from 'react';

const Contact = () => {
  const [contact, setContact] = useState("");

  const handleContactChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setContact(value);
  };

  return (
    <>
      <p className='font-medium text-[28px] text-center mt-4 pb-3.5'>
        Enter Your Details here so that our team can contact you as soon as possible
      </p>
      <div className='flex flex-col items-center py-6 border-2 border-amber-700 dark:text-white text-black'>
        <div>
          <label htmlFor="name" className='text-[18px]'>Enter Your Name Here: </label>
          <input className='shadow text-center text-[18px] ' id='name' type="text" placeholder="Enter Here" />
        </div>
        <div className="mt-4">
          <label htmlFor="contact" className='text-[18px]'>Enter Your contact number Here: </label>
          <input
            className='text-[18px] shadow text-center'
            id='contact'
            type="text"
            inputMode='numeric'
            value={contact}
            onChange={handleContactChange}
            placeholder="Enter Here"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className='text-[18px]'>Enter Your Email-id Here: </label>
          <input className='text-[18px] shadow text-center' id='email' type="text" placeholder="Enter Here" />
        </div>
        <div className="mt-4">
          <button className='px-4 py-2 font-semibold text-[18px] hover:cursor-pointer bg-blue-500 border text-white'>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
