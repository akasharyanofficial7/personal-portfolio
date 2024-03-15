import React from "react";
import "./footer.css"; // Import your CSS for styling
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_section">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              elementum felis. Nulla facilisi.
            </p>
          </div>
          <div className="footer_section">
            <h3>Contact</h3>
            <p>Email:aryanakasharyan@gmail.com</p>
            <p>Phone: +9118283887 </p>
          </div>
          <div className="footer_section">
            <h3>Follow Us</h3>
            <ul className="social_links">
              <li>
                <a
                  href="https://www.linkedin.com/in/akash-gupta-41a73a184/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akasharyanofficial7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
