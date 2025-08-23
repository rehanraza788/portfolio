import React from "react";
import rehanImg from "../assets/rehan.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gray-800 text-white flex items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* Floating Bubbles */}
      <div className="absolute w-32 h-32 bg-cyan-500 rounded-full opacity-20 top-10 left-10 animate-bounce-slow"></div>
      <div className="absolute w-24 h-24 bg-indigo-500 rounded-full opacity-25 bottom-10 right-20 animate-bounce-faster"></div>
      <div className="absolute w-28 h-28 bg-pink-500 rounded-full opacity-20 top-1/3 right-1/4 animate-bounce-slower"></div>
      <div className="absolute w-36 h-36 bg-purple-500 rounded-full opacity-15 bottom-1/4 left-1/3 animate-bounce-slow"></div>
      <div className="absolute w-20 h-20 bg-cyan-400 rounded-full opacity-25 top-1/2 left-2/3 animate-bounce-faster"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={rehanImg}
            width={400}
            height={600}
            alt="Mohd Rehan Raza"
            className="rounded-2xl shadow-lg border-4 border-cyan-500 hover:scale-105 transform transition duration-500"
          />
        </div>

        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400 animate-fadeIn">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Hi, I’m{" "}
            <span className="text-cyan-300 font-semibold">Mohd Rehan Raza</span>
            , a passionate{" "}
            <span className="text-cyan-300 font-semibold">
              React.js Developer
            </span>{" "}
            with <span className="text-cyan-300">1 year and 1 month</span> of
            professional experience at{" "}
            <span className="text-cyan-300 font-semibold">Noble-Wave</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
            I specialize in building modern, responsive, and user-friendly web
            applications. My core expertise lies in React.js, JavaScript, and
            front-end development, with a strong focus on clean UI/UX design and
            performance optimization.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
            Beyond coding, I’m always eager to learn new technologies and
            improve my problem-solving skills. I enjoy collaborating with teams,
            contributing to projects that make an impact, and constantly pushing
            myself to grow as a developer.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            🎓 I have completed my graduation ( BCA ) from{" "}
            <span className="text-cyan-300 font-semibold">
              Dr. Ram Manohar Lohia Awadh University, Ayodhya
            </span>
            .
          </p>
        </div>
      </div>

      {/* Tailwind Extra Animations */}
      <style>
        {`
          .animate-bounce-slow { animation: bounce 6s infinite; }
          .animate-bounce-slower { animation: bounce 8s infinite; }
          .animate-bounce-faster { animation: bounce 3s infinite; }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  );
};

export default About;
