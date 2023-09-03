import React from 'react';
import './about.css';
import ME from  '../../assets/me1.png'
import {  VscFolderActive  } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <VscFolderActive className='about_icon'/>
              <h5>Projects</h5>
              <small>4+ Completed </small>
            </article>
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque e maiores nihil ducimus at rem ullam reprehenderit quidem quia des amet repellat molestias quos totam. </p>
               <a href="#contact" className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  );
};

export default About;
