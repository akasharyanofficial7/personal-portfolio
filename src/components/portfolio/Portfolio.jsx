import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/p1.png";
import IMG2 from "../../assets/p2.png";
import IMG3 from "../../assets/p3.png";
import IMG4 from "../../assets/p4.avif";

const data = [
  {
    id: 4,
    image: IMG4,
    title: "Twitter Backend ",
    github: "https://github.com/akasharyanofficial7/twitter-backend",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "Blog website",
    github: "https://github.com/akasharyanofficial7/mern-blog",
    demo: "#",
  },
  {
    id: 1,
    image: IMG1,
    title: "Online Food Ordering websites ",
    github: "https://github.com/akasharyanofficial7/online-food-",
    demo: "https://maczooka.onrender.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Music Player",
    github: "https://github.com/akasharyanofficial7/music-player",
    demo: "https://sseries.onrender.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-gray-500">My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="text-gray-500">{title}</h3>
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
