import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Import images from src/assets
import localNewsImg from "../assets/local_news_website.jpg";
import msdImg from "../assets/msd project.jpg";
import multiThemeImg from "../assets/multi-theme-changer.jpg";

const projects = [
  {
    title: "Local News ",
    description:
      "A modern e-commerce web app with product listing, cart, and payment integration.",
    image: localNewsImg
  },
  {
    title: "MSD Detailing",
    description:
      "Personal portfolio showcasing skills, projects, and contact details.",
    image: msdImg
  },
  {
    title: "Theme Changer",
    description:
      "A blogging platform where users can create, edit, and share posts.",
    image: multiThemeImg
  }
];

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 py-16 px-6"
    >
      <h1 className="text-5xl font-bold text-gray-900 mb-14 text-center font-[Poppins] tracking-tight">
        My <span className="text-indigo-600">Projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-indigo-100 transition-transform duration-300 hover:scale-105 hover:shadow-indigo-400"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-t-3xl"
            />
            <div className="p-7 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-[Poppins]">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-6 font-medium flex-1">
                {project.description}
              </p>
              <button className="inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-semibold transition px-3 py-2 rounded-lg bg-indigo-50 hover:bg-purple-50 mt-auto font-[Poppins]">
                View Project <FaArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed font-[Poppins]">
          These project templates use
          <span className="font-bold text-indigo-600">React.js</span> and
          <span className="font-bold text-indigo-600">Tailwind CSS</span>,
          styled with modern <span className="text-purple-600">UI</span> and
          performance principles—easily customizable!
        </p>
      </div>
    </section>
  );
};

export default Project;
