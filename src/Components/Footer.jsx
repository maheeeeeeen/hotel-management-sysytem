import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/hotel logo 2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <img
              src={logo}
              alt="Luxury Stay Hotel"
              className="w-32 h-auto mb-4"
            />
            <p className="text-sm text-gray-400">
              Experience luxury like never before. Book your stay at Luxury Stay
              Hotel today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Luxury St, Paris, France</li>
              <li>
                <a
                  href="tel:+123456789"
                  className="text-gray-400 hover:text-white"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@luxurystay.com"
                  className="text-gray-400 hover:text-white"
                >
                  info@luxurystay.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Get the latest offers and exclusive deals directly in your inbox!
          </p>
          <form
            action="#"
            method="POST"
            className="flex justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-50 me-3 mt-4 sm:mt-0 sm:w-80 md:w-96 text-gray-400 border border-gray-400 sm:mr-3 rounded-md mb-4 sm:mb-0"
            />

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2025 Luxury Stay Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
