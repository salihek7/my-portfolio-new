import React, { useState } from 'react';
import HeroImage from '../assets/my.jpeg';

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>MUHAMMED SALIH</span>
        , Full Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and scalable responsive web applications.
      </p>
      
      <button
        onClick={handleContactClick}
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white mt-6 
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
        Contact Me
      </button>

      {/* Contact Section */}
      {showContact && (
        <div className='mt-8'>
          <h2 className='text-2xl font-bold'>Contact Me</h2>
          <p className='text-lg mt-2'>Feel free to reach out for any inquiries!</p>
          <div className='mt-4'>
            <div className='text-gray-300'>
              <strong>Email:</strong> muhammadsalih563@gmail.com
            </div>
            <div className='text-gray-300'>
              <strong>Phone:</strong> +91 9947038609
            </div>
            <div className='text-gray-300'>
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/muhammed-salih-614b1531b/" className='text-green-400 hover:text-blue-500'>muhammed-salih</a>
            </div>
            <div className='text-gray-300'>
              <strong>GitHub:</strong> <a href="https://github.com/salihek7" className='text-green-400 hover:text-blue-500'>salihek7</a>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => window.open('../../public/resume.pdf')}
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline
           transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-6'>
        Resume
      </button>
    </div>
  );
}

export default Hero;
