import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  // Step 2: Define state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 3: Function to handle dark mode toggle
  const handleDarkModeToggle = () => {
    // Toggle the value of isDarkMode
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={isDarkMode ? "light-mode" : "dark bg-black"}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        <button className="bg" onClick={handleDarkModeToggle}>
          {isDarkMode ? "DARK MODE" : "LIGHT MODE"}
        </button>
      </div>
    </>
  );
};

export default App;
