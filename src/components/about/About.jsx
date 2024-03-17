import React from "react";
import { LuSprout } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import goingup from "../../assets/going-up.png";
const About = () => {
  return (
    <section
      id="about"
      className="bg-white flex flex-col lg:flex-row lg:h-screen"
    >
      <div className="w-full lg:w-1/6 px-4  pt-8 lg:pt-0 lg:order-1">
        <LuSprout className="text-6xl font-thin  text-green-400  hidden  " />
      </div>
      <div className="w-full lg:w-1/2  px-12 p-4   lg:p-10 lg:px-0 lg:order-2">
        <h2 className="font-bold text-[#4831d4] text-4xl lg:text-5xl">About</h2>
        <p className="mt-4 text-[#4c266a] text-justify">
          A Software Engineer passionate about creating captivating and
          user-friendly web interfaces that enhance the user experience and
          satisfaction. Always eager to learn new technologies and frameworks,
          and to collaborate with others to bring ideas to life. Constantly
          seeking opportunities to grow my skills and network, I am eager to
          contribute to challenging and impactful projects that make a
          meaningful difference.
        </p>

        <div className="hidden lg:flex justify-between text-[#4831d4] font-semibold text-xl px-56 pt-2    lg:pt-16">
          <FaRegCircle />
          <FaRegCircle />
          <FaRegCircle />
          <FaRegCircle />
        </div>

        <div className="pb-16  lg:pb-64 pt-0 h-24 lg:pt-36 pl-24  ">
          <img
            src={goingup}
            alt="me"
            className="mt-0 text-[#4831d4] lg:pt-4 lg:pl-80 h-24 pt-4 text-xs font-thin"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 pt-2   px-16 lg:px-0 lg:pt-[300px] lg:order-3">
        <h2 className="font-bold text-[#4831d4] text-4xl lg:text-5xl">
          Engineering
        </h2>
        <p className="mt-4 text-[#4c266a] pb-8  text-justify">
          In the fast-paced world of JavaScript app development, I use my skills
          to create efficient solutions. I'm well-versed in JavaScript and its
          frameworks like React.js, Next.js, and Expres.js. Currently, I'm
          exploring backend development with Node.js and Express.js to broaden
          my expertise. Always eager to learn and grow!
        </p>
        <div className="hidden lg:flex justify-between text-[#4831d4] font-semibold text-xl px-56 pt-16">
          <FaRegCircle />
          <FaRegCircle />
          <FaRegCircle />
          <FaRegCircle />
        </div>
      </div>
      <div className="w-full lg:w-1/6 px-4 pt-8 lg:pt-0 lg:order-4"></div>
    </section>
  );
};

export default About;
