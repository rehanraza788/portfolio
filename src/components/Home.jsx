import profileImg from "../assets/rehan.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

function Home() {
  // Typing effect for role
  const roles = ["React.js Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    let timer;
    if (!isDeleting && text.length < currentRole.length) {
      timer = setTimeout(
        () => setText(currentRole.substring(0, text.length + 1)),
        150
      );
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(
        () => setText(currentRole.substring(0, text.length - 1)),
        100
      );
    } else if (!isDeleting && text.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex(roleIndex + 1);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 bg-[#0f172a] text-gray-200 overflow-hidden"
    >
      {/* Flo ating Background Bubbles */}
      <div className="absolute w-48 h-48 bg-indigo-500 rounded-full opacity-20 -top-16 -left-16 animate-spin-slow"></div>
      <div className="absolute w-60 h-60 bg-pink-500 rounded-full opacity-20 -bottom-20 -right-20 animate-spin-slow"></div>
      <div className="absolute w-32 h-32 border-4 border-indigo-400 rounded-full top-1/3 left-1/2 opacity-30 animate-bounce-slow"></div>

      {/* Additional bubbles */}
      <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-25 top-20 right-10 animate-bounce-slower"></div>
      <div className="absolute w-20 h-20 bg-pink-400 rounded-full opacity-30 bottom-32 left-20 animate-bounce-faster"></div>
      <div className="absolute w-36 h-36 bg-indigo-400 rounded-full opacity-15 top-1/4 left-1/4 animate-spin-slower"></div>
      <div className="absolute w-28 h-28 bg-pink-300 rounded-full opacity-20 bottom-10 right-1/3 animate-bounce-slow"></div>

      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left z-10 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-fadeIn">
          Hi, I am <span className="text-indigo-400">Mohd Rehan Raza</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300">
          <span className="text-indigo-400 font-semibold">{text}</span>
          <span className="text-indigo-400 blinking-cursor">|</span>
        </p>
        <p className="max-w-lg text-gray-300">
          Crafting sleek, modern web applications with engaging UI and seamless
          functionality.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105 transition transform">
            View Projects
          </button>
          <button className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 hover:scale-105 transition transform">
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6 justify-center md:justify-start">
          <a
            href="https://github.com/rehanraza788"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={28}
              className="text-gray-400 hover:text-indigo-400 transition transform hover:scale-125"
            />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={28}
              className="text-gray-400 hover:text-indigo-400 transition transform hover:scale-125"
            />
          </a>
        </div>
      </div>

      {/* Right Side - Profile */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center z-10">
        <div className="p-2 border-4 border-indigo-400 rounded-full shadow-2xl hover:scale-105 transform transition duration-500">
          <img
            src={profileImg}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Tailwind Extra Animations */}
      <style>
        {`
          .animate-spin-slow { animation: spin 20s linear infinite; }
          .animate-spin-slower { animation: spin 40s linear infinite; }
          .animate-bounce-slow { animation: bounce 6s infinite; }
          .animate-bounce-slower { animation: bounce 8s infinite; }
          .animate-bounce-faster { animation: bounce 3s infinite; }
          .blinking-cursor { animation: blink 1s step-start infinite; }
          @keyframes blink { 50% { opacity: 0; } }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  );
}

export default Home;
