import React, { useState } from "react";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaGooglePlay } from "react-icons/fa";

// Import images from src/assets
import localNewsImg from "../assets/local_news_website.jpg";
import nobleSalahImg from "../assets/noble_salah_app.png";
const projects = [
  {
    title: "Noble Salah – Mobile Application",
    description:
      "Developed a feature-rich Islamic mobile application with real-time prayer timings and Athan notifications based on user location and time zone. Features include Quran reading, audio playback, Qibla Compass, Tasbih Counter, Prayer Tracker, Hijri Calendar, and statistics dashboard. Utilized AI-assisted development and prompt engineering techniques using Claude AI to accelerate feature implementation.",
    url: "https://salah.noble-wave.com/",
    playStore: "https://play.google.com/store/apps/details?id=com.noblewave.noblesalah",
    github: "",
    image: nobleSalahImg,
    techStack: ["Flutter", "Dart", "SQLite", "API Integration", "Location Services", "AI-assisted Dev"],
    featured: true
  },
  {
    title: "Local News Web Application",
    description:
      "A responsive news web application built using React.js and React Router with REST API integration. Features include real-time news data, categories (Breaking News, Elections, Entertainment, Cricket), videos, e-paper (PDF), and engaging stories. Optimized performance using lazy loading and code splitting.",
    url: "https://local-news-five.vercel.app/",
    github: "https://github.com/rehanraza788/",
    image: localNewsImg,
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "React Router"],
    featured: true
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-4 left-3 right-3 flex flex-wrap gap-2 justify-center">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[80px] bg-white text-indigo-600 py-2 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1 hover:bg-indigo-50 transition"
            >
              <FaExternalLinkAlt size={11} /> Demo
            </a>
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[80px] bg-green-600 text-white py-2 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1 hover:bg-green-700 transition"
              >
                <FaGooglePlay size={11} /> Play Store
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[80px] bg-gray-800 text-white py-2 px-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1 hover:bg-gray-750 transition"
              >
                <FaGithub size={11} /> Code
              </a>
            )}
          </div>
        </div>
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-4 leading-relaxed h-[100px] overflow-hidden">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5 h-[70px] overflow-hidden content-start">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 text-[11px] font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full border border-indigo-200 hover:border-indigo-400 hover:shadow-sm transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile Only Buttons */}
        <div className="md:hidden flex flex-col gap-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition text-sm"
          >
            View Project <FaArrowRight size={14} />
          </a>
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition text-sm"
            >
              View on Play Store <FaGooglePlay size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Decorative gradient border on hover */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3))",
          mask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "2px"
        }}
      />
    </div>
  );
};

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Explore my portfolio of{" "}
            <span className="font-semibold text-indigo-600">
              modern web applications
            </span>{" "}
            built with React.js and cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-indigo-100">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <span className="font-bold text-indigo-600">
                Want to see more?
              </span>{" "}
              Check out my{" "}
              <a
                href="https://github.com/rehanraza788"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-purple-600 font-bold underline underline-offset-2 hover:no-underline transition"
              >
                GitHub profile
              </a>{" "}
              for additional projects and contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
