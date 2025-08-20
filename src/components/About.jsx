import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-800 text-white flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Hi, I’m{" "}
          <span className="text-cyan-300 font-semibold">Mohd Rehan Raza</span>,
          a passionate{" "}
          <span className="text-cyan-300 font-semibold">
            React.js Developer
          </span>
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
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Beyond coding, I’m always eager to learn new technologies and improve
          my problem-solving skills. I enjoy collaborating with teams,
          contributing to projects that make an impact, and constantly pushing
          myself to grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
