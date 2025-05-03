import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { useTheme } from "../../context/ThemeContext";
import { motion as Motion } from "framer-motion";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import { Moon, Sun } from "lucide-react"; // Optional icon library

const navItems = [
  { label: "Work", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
         ${scrolled ? "bg-black/80 backdrop-blur" : ""}
         `}
    >
      <nav className="mx-auto flex items-center justify-between px-12 py-4">
        <NavLink to="/" className="text-2xl font-bold text-white select-none">
          <span className="text-cyan-400">GANESH</span> SHINDE
        </NavLink>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-white" : "text-gray-400"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Toggle Button
        <Motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="ml-4 text-white"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <LightModeIcon className="w-5 h-5" /> : <DarkModeIcon className="w-5 h-5" />}
        </Motion.button> */}

        <NavLink
          to="/login"
          className="hidden md:block px-5 py-2 text-sm font-semibold text-white bg-cyan-500 rounded-lg shadow-md"
        >
          Learn With Me
        </NavLink>
      </nav>
    </header>
  );
};
