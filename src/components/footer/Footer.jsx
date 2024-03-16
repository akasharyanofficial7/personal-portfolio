import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="footer_section">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              A Software Engineer passionate about creating captivating and
              user-friendly web interfaces that enhance the user experience and
              satisfaction.
            </p>
          </div>

          {/* Contact */}
          <div className="footer_section">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm">Email: aryanakasharyan@gmail.com</p>
            <p className="text-sm">Phone: +9118283887</p>
          </div>

          {/* Follow Us */}
          <div className="footer_section">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/akash-gupta-41a73a184/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white text-2xl hover:text-yellow-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white text-2xl hover:text-yellow-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/akasharyanofficial7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-2xl hover:text-yellow-400" />
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
