import React from "react";
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from "react-icons/hi";
import profileImage from '../assets/profile.jpg';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
     

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
       {/* Profile Image */}
     <div className="flex justify-center mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 object-cover border-4 border-pink-600" // Adjust size and styling as needed
          />
        </div>
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          John Joseph
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hi there! I’m a full-stack developer passionate about creating awesome
          digital experiences. I love building and sometimes designing <b>Mobile</b>
          and <b>Web</b> applications that are responsive and user-friendly. Right now,
          I’m focused on crafting full-stack solutions for both mobile and web
          platforms.
        </p>

        <div>
        <Link to="work"> {/* Change the path to your Work component's route */}
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          View Work
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
