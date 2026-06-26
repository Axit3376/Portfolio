import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-70 backdrop-blur-xl shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-4 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Aditya</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Shekhar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer pb-1 border-b-2 border-transparent transition duration-200 ${
                activeSection === item.id
                  ? "text-white border-[#8245ec]"
                  : "text-gray-400 hover:text-white hover:border-[#8245ec]"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-[#8245ec] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#9b4ffb]"
          >
            View Projects
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-[#050414]/95 backdrop-blur-lg z-50 rounded-3xl shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer pb-1 border-b-2 border-transparent transition duration-200 ${
                  activeSection === item.id
                    ? "text-white border-[#8245ec]"
                    : "hover:text-white hover:border-[#8245ec]"
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
