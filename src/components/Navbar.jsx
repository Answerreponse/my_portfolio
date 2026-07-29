import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-400">
          @answer
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-400"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-400"
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-400"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-400"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-400"
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Dark Mode Button */}
          <button
            onClick={toggleTheme}
            className="
              p-2
              rounded-full
              bg-slate-700
              hover:bg-slate-600
              transition
            "
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-white text-lg" />
            )}
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-slate-800 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">

          {[
            "hero",
            "about",
            "skills",
            "experience",
            "services",
            "projects",
            "testimonials",
            "contact",
          ].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="cursor-pointer capitalize"
              >
                {item}
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;