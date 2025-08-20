import profileImg from "../assets/rehan.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 relative overflow-hidden bg-[#0f172a] text-gray-200">
      {/* Background Circle Decoration */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I am <span className="text-indigo-400">Mohd Rehan Raza</span>
        </h1>
        <span className="inline-block bg-indigo-900 text-indigo-300 font-medium px-4 py-1 rounded-full shadow-sm">
          React.js Developer
        </span>
        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
          I love building{" "}
          <span className="font-semibold text-white">
            modern, responsive web apps
          </span>{" "}
          that solve real-world problems and create meaningful user experiences.
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
            View My Projects
          </button>
          <button className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition">
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6 justify-center md:justify-start">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={28}
              className="text-gray-400 hover:text-indigo-400 transition"
            />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={28}
              className="text-gray-400 hover:text-indigo-400 transition"
            />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-10">
        <div className="p-2 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full shadow-2xl">
          <img
            src={profileImg}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-[#0f172a] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
