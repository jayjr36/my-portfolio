import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#1e3a61] flex justify-center items-center p-4'>
      <div className='flex flex-col items-center max-w-[600px] w-full bg-[#112240] p-8 rounded-lg shadow-lg'>
        
        {/* Title and Intro */}
        <div className='text-center mb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Get In Touch</p>
          <p className='text-gray-300 mt-4'>I would love to hear from you! Whether you have a question or just want to connect, feel free to reach out.</p>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-around items-center mt-6 space-y-6 md:space-y-0 w-full">
          <div className="text-white text-center md:text-left">
            <p className='text-2xl font-semibold'>Phone</p>
            <p className='text-lg mt-2'>+255 715 016 188</p>
          </div>
          <div className="text-white text-center md:text-left">
            <p className='text-2xl font-semibold'>Email</p>
            <p className='text-lg mt-2'>johnjr092@gmail.com</p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className='mt-8'>
          <a href='mailto:johnjr092@gmail.com'>
            <button className='px-6 py-3 bg-pink-600 text-white rounded-md font-bold text-lg hover:bg-pink-700 transition duration-300'>
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
