import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Modal } from "flowbite-react";
import "./header.css";
import CTA from "./CTA";
import { MdOutlineEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

import ME from "../../assets/meme.png";
import ladder1 from "../../assets/ladder1.png";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-purple-800  flex lg:h-screen  flex-col lg:flex-row">
        <div className="text-[#4831d4] w-1/8 mt-10 px-4">
          <img
            src={ladder1}
            alt="me"
            className="text-xl h-10   lg:h-14  pt-4 font-thin text-green-400 z-20 fixed"
          />
        </div>
        <div className="container mx-auto px-4 flex-1 text-center relative ">
          <h5 className="text-xs font-bold pt-8  lg:pt-12  lg:mt-40 text-[#ccf381]">
            Hello , I'm
          </h5>
          <h5 className="text-2xl lg:text-3xl font-bold mt-2 lg:mt-4 text-white">
            Akash Gupta
          </h5>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#ccf381] font-sans">
            Web Developer
          </h1>

          <div className="my-8 pb-16  lg:pb-24 mx-8 text-xm lg:mx-32 font-sans text-start">
            <article className="text-white text-justify">
              I'm always enthusiastic about learning new technologies and
              frameworks. I enjoy collaborating with fellow developers and
              bringing ideas to life through coding. Let's connect and build
              amazing things together!
            </article>
            <div className=" flex  flex-row  text-sm font-mono   pt-10  gap-8 justify-between">
              <p className="text-[#ccf381]">
                Dedication paved the way; success became the destination
              </p>
              <p className="text-[#ccf381] ">
                Skilled at Front-end Engineering. Just believe me (・_・;)
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 bg-[#ccf381] relative order-2 lg:order-1">
          <div className="me relative h-full">
            <div className="me relative h-full">
              <div className="w-80 h-80 pb-64 pt-0 lg:w-80 lg:h-72  lg:pt-36 pl-24 lg:pl-28">
                <img
                  src={ME}
                  alt="me"
                  className="mt-8 lg:mt-16 pt-8  px-8"
                  style={{
                    backgroundColor: "rgb(85 33 181)",
                  }}
                />
                <hr className="border border-solid font-bold border-white mt-2" />
              </div>
            </div>

            {/* Toggle icon */}
            <button
              className="top-12 right-10   lg:top-20  lg:right-20 transform-translate-y-1/2 bg-transparent text-center z-20 fixed "
              onClick={toggleCard}
              aria-label="Toggle Modal"
            >
              <FaAlignRight
                size={30}
                className="text-indigo-950  font-thin text-2xl  lg:text-3xl"
              />
            </button>

            {isOpen && (
              <div className="absolute top-0 left-0 transform-translate-x-1/2  ">
                <div className=" ">
                  <Modal
                    show={isOpen}
                    onClose={() => setIsOpen(false)}
                    popup
                    className="mt-24 shadow-zinc-50 bg-[#ffffff] rounded-sm lg:ml-[1000px] ml-[60px]  h-[250px] lg:w-[330px] w-[260px] lg:h-[300px]"
                  >
                    <Modal.Header className="text-gray-600 bg-[#ffffff] " />
                    <Modal.Body className="text-gray-600 ">
                      <div className="footer text-center bg-white text-black py-4">
                        <div className="mx-auto">
                          <h3 className="text-gray-600 font-sans text-xl font-semibold pb-4">
                            Follow Us
                          </h3>
                          <ul className="text-blue-500 text-2xl flex justify-between px-6">
                            <li>
                              <a
                                href="https://www.linkedin.com/in/akash-gupta-41a73a184/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaLinkedin className="hover:text-yellow-400" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaTwitter className="hover:text-yellow-400" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://github.com/akasharyanofficial7"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaGithub className="hover:text-yellow-400" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://leetcode.com/problemset/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400"
                              >
                                <SiLeetcode />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <article className="text-gray-500 mx-auto ">
                          <a
                            href="mailto:aryanakasharyan@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 font-mono"
                          >
                            {/* <MdOutlineEmail className="hover:bg-yellow-400 " /> */}
                            aryanakasharyan@gmail.com
                          </a>
                        </article>
                        <h3 className="text-gray-600 font-sans text-xl font-semibold my-4">
                          <CTA />
                        </h3>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
