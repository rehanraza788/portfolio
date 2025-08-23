import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide">
            <a
              href="/home"
              className="bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text hover:from-pink-500 hover:to-yellow-400 transition-all duration-500"
            >
              Rehan<span className="text-white">Raza</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="relative text-white font-medium group">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative text-white font-medium group">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#skill" className="relative text-white font-medium group">
              Skill
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#project"
              className="relative text-white font-medium group"
            >
              Project
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="relative text-white font-medium group"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-900 to-gray-900 px-6 pb-6 space-y-4 text-center">
          <a
            href="#home"
            className="block text-white text-lg font-medium hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-white text-lg font-medium hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skill"
            className="block text-white text-lg font-medium hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Skill
          </a>
          <a
            href="#project"
            className="block text-white text-lg font-medium hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Project
          </a>
          <a
            href="#contact"
            className="block text-white text-lg font-medium hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
