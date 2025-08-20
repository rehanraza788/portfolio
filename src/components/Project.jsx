import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A modern e-commerce web app with product listing, cart, and payment integration.",
    image: "https://via.placeholder.com/400x250?text=E-Commerce+Template"
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing skills, projects, and contact details.",
    image: "https://via.placeholder.com/400x250?text=Portfolio+Template"
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform where users can create, edit, and share posts.",
    image: "https://via.placeholder.com/400x250?text=Blog+Template"
  },
  {
    title: "School Management System",
    description: "A system for managing students, teachers, classes, and fees.",
    image: "https://via.placeholder.com/400x250?text=School+Management+Template"
  }
];

const Project = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center relative">
        My <span className="text-indigo-600">Projects</span>
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-20 h-1 bg-indigo-600 rounded"></span>
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Section About Projects */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          These are some of my project templates built with{" "}
          <span className="font-semibold text-indigo-600">
            React.js, Tailwind CSS, and Material UI
          </span>
          . Each project is designed with modern UI principles and optimized for
          performance & responsiveness. You can customize these templates and
          integrate APIs to make them fully functional.
        </p>
      </div>
    </section>
  );
};

export default Project;
