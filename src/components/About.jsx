import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-[#0a192f] to-[#1e3a61] text-gray-300 flex justify-center items-center">
      <div className="max-w-[1000px] w-full p-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">About Me</p>
        </div>

        {/* Content Section */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center items-center text-center sm:text-right">
            <p className="text-2xl font-semibold">
              Hi, I'm John! It's great to have you here. Feel free to explore my work and get to know me better.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center items-center text-center sm:text-left">
            <p className="text-lg mt-4">
              I'm a passionate software developer dedicated to creating impactful solutions that make life easier. 
              Whether it's helping individuals, empowering small businesses, or supporting large enterprises, 
              I specialize in delivering software that meets unique needs and goals. 
              Imagine what we could achieve together with a tech expert at your side—let's turn your ideas into reality!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
