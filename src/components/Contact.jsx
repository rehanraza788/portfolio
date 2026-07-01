import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0f172a] text-gray-200 flex items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      {/* Floating Background Effects */}
      <div className="absolute w-72 h-72 bg-indigo-500 rounded-full opacity-10 -bottom-20 -left-20 blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-10 -top-20 -right-20 blur-3xl"></div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* Left Side - Text & CTA */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text">
            Let's Build Something Great Together!
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Whether you are looking to build a high-performance web app, a dynamic mobile app, or integrate AI-assisted prompt engineering workflows, feel free to get in touch.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold">⚡</span>
              <p className="text-gray-300 font-medium">Scalable Frontend & Mobile Applications</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold">🚀</span>
              <p className="text-gray-300 font-medium">AI-Assisted Development & Prompt Engineering</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/10 text-pink-400 text-sm font-semibold">💎</span>
              <p className="text-gray-300 font-medium">Clean Code & Premium UI/UX Design</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Cards */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-[#1e293b]/60 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 shadow-xl hover:border-cyan-500/30 transition duration-300 group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition duration-300">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email Me</p>
                <a href="mailto:rraza9123@gmail.com" className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition break-all">
                  rraza9123@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#1e293b]/60 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 shadow-xl hover:border-indigo-500/30 transition duration-300 group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition duration-300">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Call Me</p>
                <a href="tel:+918090670632" className="text-base sm:text-lg font-bold text-white hover:text-indigo-400 transition">
                  +91 8090670632
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#1e293b]/60 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 shadow-xl hover:border-pink-500/30 transition duration-300 group">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition duration-300">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                <span className="text-base sm:text-lg font-bold text-white">
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 pt-4 justify-center md:justify-start">
            <a
              href="https://github.com/rehanraza788"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:scale-110 transition duration-300 shadow-md"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rehanraza"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:scale-110 transition duration-300 shadow-md"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
