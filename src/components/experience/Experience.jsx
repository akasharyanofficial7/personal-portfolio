import React from "react";
import nic from "../../assets/nic_logo.png";
import ims from "../../assets/ims_logo.jfif";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-purple-800 py-16 flex flex-col lg:flex-row lg:h-screen"
    >
      {/* About */}
      <div className="w-full lg:w-1/2 px-12  p-4 lg:px-0 lg:order-2  ">
        <h2 className="font-bold text-[#ccf381]  text-4xl  font-sans pl-20">
          So Far
        </h2>
        <p className="mt-4 text-white text-justify px-0  lg:px-20">
          Currently pursuing a Bachelor of Technology in Computer Science and
          Engineering at IMS Engineering College, I am deeply passionate about
          crafting user-friendly interfaces that captivate and delight users,
          fostering a profound connection with the applications I develop.
        </p>

        <p className="mt-4 text-white text-justify px-0  lg:px-20">
          During my tenure at the National Informatics Center (NIC), I undertook
          an enriching internship where I delved into the realm of web
          development. Focused on harnessing JavaScript, I spearheaded the
          development of dynamic applications and interfaces for an innovative
          project aimed at revolutionizing inventory management systems.
        </p>
        <h2 className="font-bold text-red-400 text-2 font-mono text-2xl pt-4 pl-20">
          Technologies
        </h2>
        <div className="mt-4 text-white text-justify px-0 flex flex-row  lg:px-20">
          <div className="bg-white shadow-xl rounded-lg  w-12  h-12 p-4   ">
            {/* <img src={nic} alt="Logo 1" className="rounded-lg " /> */}
            <TbBrandReactNative className="bg-blue-600 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-col px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-blue-300 ">
              React.js
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg  w-12  h-12 p-4  mb-4">
            <FaGitAlt className="bg-red-600 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-row px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-red-400  ">
              Git
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg  w-12  h-12 p-4  mb-4">
            <GrMysql className="bg-blue-400 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-row px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-blue-400  ">
              Mysql
            </p>
          </div>
        </div>
        {/* lalu */}

        <div className="mt-4 text-white text-justify px-0 flex flex-row  lg:px-20">
          <div className="bg-white shadow-lg rounded-lg  w-12  h-12 p-4  mb-4">
            <FaNodeJs className="bg-yellow-400 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-row px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-yellow-400  ">
              JS
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg  w-12  h-12 p-4  mb-4">
            <SiMongodb className="bg-green-500 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-row px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-green-400  ">
              Mongodb
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg  w-12  h-12 p-4  mb-4">
            <FaHtml5 className="bg-red-400 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-row px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-red-400  ">
              HTML
            </p>
          </div>
        </div>

        {/* lalu */}

        <div className="mt-4 text-white text-justify px-0 flex flex-row  lg:px-20">
          <div className="bg-white shadow-lg rounded-lg  w-12  h-12 p-4  mb-4">
            <FaCss3 className="bg-yellow-400 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-row px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-yellow-400  ">
              CSS
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg  w-12  h-12 p-4  mb-4">
            <SiExpress className="bg-green-400 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-row px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-green-400  ">
              Express
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg  w-12  h-12 p-4  mb-4">
            <FaJava className="bg-yellow-400 rounded-lg w-8  h-8 justify-center  " />
          </div>
          <div className="  w-full flex flex-row px-2  gap-4 lg:px-2">
            <p className="text-sm  lg:text-lg font-semibold  text-yellow-400  ">
              Java
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4   lg:pt-0 lg:order-3 flex flex-row  px-8 mt-4   lg:mt-28    lg:px-0     justify-between   ">
        <div className="bg-white shadow-lg rounded-lg  w-24  h-24 p-4  mb-4">
          <img src={nic} alt="Logo 1" className="rounded-lg " />
        </div>
        <div className="  w-full flex flex-col px-2  lg:px-12">
          <p className="text-lg font-semibold  text-gray-300 ">
            Web Developer Intern
          </p>

          <i className="  text-gray-200 font-date py-1 text-xs">
            July 2023 - Sept 2023
          </i>
          <p className="text-sm text-gray-200 mb-4">
            National Informatics Center
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/4  lg:pt-0 lg:order-3 flex flex-row   px-8   mt-4   lg:mt-28  lg:px-0       justify-between   ">
        <div className="bg-white shadow-lg rounded-lg  w-24  h-24 p-4  mb-4">
          <img src={ims} alt="Logo 1" className="rounded-lg " />
        </div>
        <div className="  w-full flex flex-col px-2  lg:px-12">
          <p className="text-lg font-semibold  text-gray-300 ">
            Bachelor of Technology
          </p>
          <i className="  text-gray-200 font-date py-1 text-xs">
            8, 2020 - present
          </i>
          <p className="text-sm text-gray-200 mb-2">IMS Engineering College</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
