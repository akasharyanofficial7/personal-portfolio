import React from "react";
import IMG1 from "../../assets/p1.png";
import IMG2 from "../../assets/p2.png";
import IMG3 from "../../assets/p3.png";
import IMG4 from "../../assets/p4.avif";
import IMG5 from "../../assets/portfolio.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Online Food Ordering websites",
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
    {
      id: 3,
      image: IMG3,
      title: "Blog website",
      github: "https://github.com/akasharyanofficial7/mern-blog",
      demo: "#",
    },
    {
      id: 4,
      image: IMG4,
      title: "Twitter Backend",
      github: "https://github.com/akasharyanofficial7/twitter-backend",
      demo: "#",
    },
    {
      id: 5,
      image: IMG5,
      title: "Personal Portfolio",
      github: "https://github.com/akasharyanofficial7/twitter-backend",
      demo: "https://github.com/akasharyanofficial7/personal-portfolio",
    },
  ];

  return (
    <section
      id="portfolio"
      className="mt-16 lg:mt-24 lg:h-screen  lg:pb-0 pb-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-500 mb-8">
        My Projects
      </h2>

      <div className="container grid grid-cols-2 lg:grid-cols-4  pt-4 gap-8">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article
              key={id}
              className="border rounded-lg   h-44 lg:h-56  w-38   lg:w-56 overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-95"
            >
              <img
                src={image}
                alt={title}
                className="h-24 lg:h-36   w-full   lg:w-56  object-cover"
              />
              <div className="p-2 lg:p-4">
                <h3 className="text-sm lg:text-lg font-semibold mb-2">
                  {title.slice(0, 20)}
                </h3>
                <div className="flex justify-center mb-2">
                  <a
                    href={github}
                    className="btn btn-sm mr-2 lg:mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-sm btn-primary text-green-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
