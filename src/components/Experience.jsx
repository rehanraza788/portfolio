import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work <span className="text-cyan-400">Experience</span>
        </h1>
        <p className="text-gray-400 text-lg text-center mb-12">
          My professional journey in frontend development
        </p>

        {/* Experience Card */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30 shadow-2xl hover:border-cyan-400/50 transition duration-300">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center">
                <FaBriefcase className="text-3xl text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                Frontend Developer (React.js)
              </h3>
              <h4 className="text-xl font-semibold text-white mb-4">
                Noble Wave
              </h4>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span>Feb 2024 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-gray-300">
                    Developed scalable and responsive web applications using
                    React.js and JavaScript
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-gray-300">
                    Built dynamic Single Page Applications (SPA) using React
                    Hooks and React Router
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-gray-300">
                    Integrated REST APIs for real-time data rendering
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-gray-300">
                    Managed state using Context API and Zustand
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-gray-300">
                    Optimized performance using lazy loading and code splitting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-gray-300">
                    Designed responsive UI using Tailwind CSS and Material UI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span className="text-gray-300">
                    Implemented reusable components and improved user experience
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
