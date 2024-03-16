import React, { useState, useRef } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Modal } from "flowbite-react";
import "./header.css";
import CTA from "./CTA";
import { MdOutlineEmail } from "react-icons/md";
import ME from "../../assets/meme.png";
import ladder1 from "../../assets/ladder1.png";

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const emailInputRef = useRef(null);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-indigo-700 flex lg:h-screen  flex-col lg:flex-row">
        <div className="bg-indigo-700 w-1/8 mt-10 px-4">
          <img
            src={ladder1}
            alt="me"
            className="text-xl h-14  pt-4 font-thin text-green-400 z-20 fixed"
          />
        </div>
        <div className="container mx-auto px-4 flex-1 text-center relative ">
          <h5 className="text-xs font-bold mt-16 lg:mt-40 text-gray-700">
            Hello , I'm
          </h5>
          <h5 className="text-2xl lg:text-3xl font-bold mt-2 lg:mt-4 text-white">
            Akash Gupta
          </h5>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#ccf381] font-sans">
            Web Developer
          </h1>

          <div className="my-8 pb-24 mx-2 text-xm lg:mx-32 font-mono text-start">
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
            <div className="me w-80   h-80 pb-64    pt-0 lg:w-80 lg:h-72 lg:pt-36 pl-24 lg:pl-28   ">
              <img src={ME} alt="me" className="mt-0  lg:mt-16" />
            </div>
            {/* Toggle icon */}
            <button
              className="top-20 right-20 transform -translate-y-1/2 bg-transparent text-center z-20 fixed "
              onClick={toggleCard}
              aria-label="Toggle Modal"
            >
              <FaAlignRight
                size={30}
                className="text-indigo-800 font-semibol text-4xl  "
              />
            </button>

            {/* Content */}
            {isOpen && (
              <div className="absolute top-0 left-0 transform -translate-x-1/2  ">
                <div className=" ">
                  <Modal
                    show={isOpen}
                    onClose={() => setIsOpen(false)}
                    popup
                    className="mt-24 shadow-lg-light bg-white rounded-sm lg:ml-[1000px] ml-[60px] w-[330px] h-[330px]"
                  >
                    <Modal.Header className="text-gray-600  bg-white " />
                    <Modal.Body className="text-gray-600 ">
                      <div className="footer text-center bg-white text-black">
                        <div className=" ">
                          <h3 className="text-gray-600 font-sans text-xl font-semibold pb-4">
                            Follow Us
                          </h3>
                          <ul className="text-blue-500 text-2xl flex justify-between px-2 ">
                            <li>
                              <a
                                href="https://www.linkedin.com/in/akash-gupta-41a73a184/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaLinkedin className="hover:bg-yellow-400" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaTwitter className="hover:bg-yellow-400" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://github.com/akasharyanofficial7"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaGithub className="hover:bg-yellow-400" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <article className="text-gray-500">
                          <a
                            href="mailto:aryanakasharyan@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 font-mono"
                          >
                            <MdOutlineEmail className="hover:bg-yellow-400" />
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
