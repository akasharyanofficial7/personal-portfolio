// SecondPage.js

import React from "react";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
const SecondPage = () => {
  return (
    <div>
      <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default SecondPage;
