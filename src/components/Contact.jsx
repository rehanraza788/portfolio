import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0f172a] text-gray-200 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Form */}
        <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            CONTACT WITH ME
          </h2>
          <p className="text-gray-400 mb-6">
            If you have any questions or concerns, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Your Name:</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Your Email:</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Your Message:</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-green-400 outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="  w-full py-3 rounded-lg font-semibold text-white bg-black hover:opacity-90 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <HiOutlineMail size={28} className="text-green-400" />
            <span>rraza9123@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <HiOutlinePhone size={28} className="text-green-400" />
            <span>+91 8090670632</span>
          </div>
          <div className="flex items-center space-x-4">
            <HiOutlineLocationMarker size={28} className="text-green-400" />
            <span>New Delhi India 110080</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub
                size={32}
                className="text-gray-400 hover:text-green-400 transition"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin
                size={32}
                className="text-gray-400 hover:text-green-400 transition"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter
                size={32}
                className="text-gray-400 hover:text-green-400 transition"
              />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook
                size={32}
                className="text-gray-400 hover:text-green-400 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
