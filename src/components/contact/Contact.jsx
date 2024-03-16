import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sbapc7p",
      "template_pgbsrmg",
      form.current,
      "Na_IZ_sb4pflejjPt"
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-gray-200 lg:h-screen ">
      <h1 className="text-3xl lg:text-5xl font-bold text-[#4831d4] text-center font-sans pt-20 mb-8">
        Send me message
      </h1>

      <h1 className="lg:text-2xl text-lg text-center px-8 lg:px-4 text-[#4c266a]">
        Got a question or proposal, or just want to say hi? Go ahead.
      </h1>

      <div className="container px-12 lg:px-44">
        <form ref={form} onSubmit={sendEmail} className="">
          <div className="lg:flex lg:justify-between px-2">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-gray-600 my-4">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="px-8 py-2 bg-gray-200    border-b-2 border-solid border-[#4831d4] w-64"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-gray-600 my-4">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="px-8 py-2 border-b-2   border-solid border-[#4831d4] bg-gray-200  focus:outline-none w-64 "
              />
            </div>
          </div>
          <div className="flex flex-col m-4">
            <label htmlFor="message" className="text-gray-600 my-4">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              cols="38"
              placeholder="Hi, we have openings for an amazing frontend developers."
              required
              className="px-4 py-3 border-b-2   border-solid border-[#4831d4] bg-gray-200  focus:outline-none lg:w-full w-64"
            ></textarea>
          </div>
          <div className=" text-center pl-4  pb-4 lg:pl-80">
            <button
              type="submit"
              className="   hover:text-white py-3  border-2 border-solid border-[#4831d4] font-sans text-sm   font-semibold    transition   text-center selection:duration-300 ease-in-out hover:bg-[#4831d4]   w-56 px-8   h-12 my-6     text-[#4831d4] flex justify-center  "
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="contact_options">
          {/* Add your contact options here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
