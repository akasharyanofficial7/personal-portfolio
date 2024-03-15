import React from "react";
import "./about.css";
import ME from "../../assets/me3.jpeg";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className=" text-gray-600 pl-8">Get To Know</h5>
      <h2 className="pl-8">About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" className="about_me1" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <VscFolderActive className="about_icon" />
              <h5>Projects</h5>
              <small>4+ Completed </small>
            </article>
          </div>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "18px",
              color: "#808e9b",
            }}
            className="text-gray-900"
          >
            I, Akash Gupta, am a MERN stack developer. I have a strong passion
            for coding and designing. Completing IT projects and bringing
            creative ideas to life is not just my profession but also my
            enthusiasm.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
