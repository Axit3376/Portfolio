import React from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/prof.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-20"
    >
      <div className="flex flex-col gap-14 md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
            Building thoughtful data products and modern web apps.
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed">
            I’m an AI & Data Science engineering student creating intuitive tools with Python, machine learning, and polished frontend development.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start sm:items-center">
            <a
              href="https://drive.google.com/file/d/1s22husfzRWyOhccD7obPSLupMhAyTeEp/view?usp=sharing"
              className="inline-flex items-center justify-center rounded-full bg-[#8245ec] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#9b4ffb]"
            >
              View Resume
            </a>
            <a
              href="https://drive.google.com/file/d/1s22husfzRWyOhccD7obPSLupMhAyTeEp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white"
            >
              
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-72 h-72 sm:w-80 sm:h-80 rounded-[36px] border border-gray-700 bg-[#0b0c14] overflow-hidden"
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Aditya Shekhar"
              className="w-full h-full rounded-[36px] object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
