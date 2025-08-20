import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMui } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" size={40} />,
    level: "95%"
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" size={40} />,
    level: "90%"
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500" size={40} />,
    level: "85%"
  },
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-500" size={40} />,
    level: "88%"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" size={40} />,
    level: "80%"
  },
  {
    name: "Material UI",
    icon: <SiMui className="text-blue-500" size={40} />,
    level: "75%"
  }
];

const Skill = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
        My <span className="text-indigo-600">Skills</span>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-16 h-1 bg-indigo-600 rounded"></span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl text-center mb-12">
        Here are some of the technologies I work with. I am constantly learning
        and improving my skills to build modern, responsive, and user-friendly
        web applications.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl transition transform duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              {skill.icon}
              <p className="text-xl font-semibold text-gray-800">
                {skill.name}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
                style={{ width: skill.level }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Proficiency: {skill.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
