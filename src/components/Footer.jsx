import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300  relative">
      {/* Rounded Top */}
      <div className="absolute -top-5 left-0 w-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-white tracking-wide mb-4">
          Rehan Raza
        </h1>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Rehan Raza | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
