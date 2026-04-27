import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiMui, SiNextdotjs, SiReactrouter } from "react-icons/si";

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="text-cyan-500" size={40} />,
    level: 90,
    colorFrom: "#22D3EE", // cyan-400
    colorTo: "#0891B2" // cyan-600
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black" size={40} />,
    level: 85,
    colorFrom: "#000000", // black
    colorTo: "#333333" // dark gray
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" size={40} />,
    level: 88,
    colorFrom: "#FACC15", // yellow-400
    colorTo: "#EAB308" // yellow-500
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" size={40} />,
    level: 95,
    colorFrom: "#F97316", // amber-500
    colorTo: "#F59E0B" // amber-400
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" size={40} />,
    level: 92,
    colorFrom: "#3B82F6", // blue-500
    colorTo: "#2563EB" // blue-600
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" size={40} />,
    level: 90,
    colorFrom: "#0D9488", // teal-600
    colorTo: "#14B8A6" // teal-500
  },
  {
    name: "Material UI",
    icon: <SiMui className="text-blue-600" size={40} />,
    level: 85,
    colorFrom: "#2563EB", // blue-600
    colorTo: "#3B82F6" // blue-500
  },
  {
    name: "Context API",
    icon: <FaReact className="text-blue-400" size={40} />,
    level: 88,
    colorFrom: "#61DAFB", // react blue
    colorTo: "#2196F3" // darker blue
  },
  {
    name: "Zustand",
    icon: <FaNodeJs className="text-green-500" size={40} />,
    level: 82,
    colorFrom: "#68D391", // green-300
    colorTo: "#38A169" // green-500
  },
  {
    name: "REST API",
    icon: <SiReactrouter className="text-pink-500" size={40} />,
    level: 85,
    colorFrom: "#EC4899", // pink-400
    colorTo: "#DB2777" // pink-600
  }
];

// Helper to calculate stroke-dashoffset for circle progress
const radius = 60;
const circumference = 2 * Math.PI * radius;

const Skill = () => {
  return (
    <section
      id="skill"
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center py-16 px-6 font-poppins"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 relative">
        My <span className="text-indigo-600">Skills</span>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-20 h-1 bg-indigo-600 rounded"></span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl text-center mb-14 px-4">
        Expertise in{" "}
        <span className="text-indigo-600 font-semibold">
          React.js, Next.js, JavaScript
        </span>
        , with strong skills in{" "}
        <span className="text-purple-600 font-semibold">
          state management (Context API, Zustand)
        </span>
        , and modern UI frameworks like{" "}
        <span className="text-indigo-600 font-semibold">
          Tailwind CSS and Material UI
        </span>.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl w-full">
        {skills.map(({ name, icon, level, colorFrom, colorTo }, index) => {
          // strokeDashoffset for filled portion
          const offset = circumference - (circumference * level) / 100;

          return (
            <div
              key={index}
              className="flex flex-col items-center bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-6 cursor-default hover:scale-105 transition-transform duration-300"
            >
              <svg width={140} height={140} className="mb-6">
                <circle
                  stroke="#E5E7EB" // gray-200
                  fill="transparent"
                  strokeWidth={12}
                  r={radius}
                  cx={70}
                  cy={70}
                />
                <circle
                  stroke={`url(#grad${index})`}
                  fill="transparent"
                  strokeWidth={12}
                  r={radius}
                  cx={70}
                  cy={70}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  strokeLinecap="round"
                  style={{
                    strokeDashoffset: offset,
                    transition: "stroke-dashoffset 1.3s ease-out"
                  }}
                />
                <defs>
                  <linearGradient
                    id={`grad${index}`}
                    x1="1"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={colorFrom} />
                    <stop offset="100%" stopColor={colorTo} />
                  </linearGradient>
                </defs>

                <foreignObject
                  x={35}
                  y={35}
                  width={70}
                  height={70}
                  className="flex justify-center items-center"
                >
                  <div className="flex justify-center items-center w-full h-full">
                    {icon}
                  </div>
                </foreignObject>
              </svg>

              <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
              <p className="text-indigo-600 font-bold mt-2">{level}%</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
