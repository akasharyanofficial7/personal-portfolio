import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/p1.jpg";
import IMG2 from "../../assets/p2.png";
import IMG3 from "../../assets/p3.png";
import IMG4 from "../../assets/p4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Flight Searching and Ticket",
    github: "https://github.com/akasharyanofficial7/flightservice1",
    demo: "#",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-Commmerce UI",
    github: "https://github.com",
    demo: "https://magneta-shop.netlify.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Chat APP using Socket",
    github: "https://github.com/akasharyanofficial7/socket_chat_app",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
