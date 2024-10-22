import React, { useState } from 'react';
import { data } from "../data/data.js";
import { mobile_data } from "../data/mobile_data.js";
import Modal from './Modal'; // Modal component for showing gallery

const Work = () => {

    // projects file
    const project = data;
    const mobileProjects = mobile_data;

    // State to manage mobile app dialog
    const [selectedApp, setSelectedApp] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (app) => {
      setSelectedApp(app);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedApp(null);
    };
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] px-4'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          {/* <p className='py-6'>Check out some of my recent work</p> */}
        </div>

          {/* Mobile Apps Section */}
          <div className='py-8'>
          <p className='text-3xl font-bold text-gray-300'>Mobile Apps</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {/* Replace this array with your actual mobile app data */}
            {mobileProjects.map((app, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${app.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                          flex justify-center text-center items-center mx-auto content-div "
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {app.name}
                  </span>
                  <div className="pt-8 text-center ">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                      onClick={() => openModal(app)} // Open modal for app details
                    >
                      Live
                    </button>
                    <a href={app.github} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Projects Section */}
        <p className='text-3xl font-bold text-gray-300'>Web Apps</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        
          
          {/* Grid Item for Web Projects */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                        flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                 bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      

        {/* Modal for Mobile App Details */}
        {isModalOpen && selectedApp && (
          <Modal app={selectedApp} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Work;
