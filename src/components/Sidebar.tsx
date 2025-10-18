import { useEffect, useState } from "react";
import {
  FaCertificate,
  FaDesktop,
  FaFileAlt,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import profilePic from "../assets/profilepic.jpg";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <RxAvatar /> },
    {
      path: "/certifications",
      label: "Certifications",
      icon: <FaCertificate />,
    },
    { path: "/resume", label: "Resume", icon: <FaFileAlt /> },
    { path: "/projects", label: "Projects", icon: <FaDesktop /> },
  ];
  return (
    <aside className="w-2/7 md:w-2/8 h-screen overflow-y-auto bg-[color:var(--color-bg)] border-r border-[color:var(--color-border)] fixed left-0 top-0 p-6 flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center mb-6 lg:flex-row gap-5">
          <img
            src={profilePic}
            alt="profile"
            className="rounded-full w-10 h-10 md:w-20 md:h-20 mb-3"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm md:text-lg text-[color:var(--color-heading)]">
              Mudath-thir Hassan
            </h2>
            <p className="text-sm text-[color:var(--color-text)]">
              Fullstack Software Engineer
            </p>
          </div>
        </div>

        <nav className="space-y-2 mb-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md transition sm:items-center mb-1 justify-center md:justify-start ${
                  isActive
                    ? "bg-[color:var(--color-border)] text-[color:var(--color-heading)] font-medium shadow-sm"
                    : "text-[color:var(--color-text)] hover:bg-[color:var(--color-border)]"
                }`
              }
            >
              {item.icon}
              <span className="hidden md:inline">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col justify-center items-center md:items-start">
        <h3 className="font-semibold text-sm mb-2 text-[color:var(--color-subheading)]">
          Socials
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-3 text-[color:var(--color-text)]">
          <a
            href="https://www.linkedin.com/in/mudath-thir-hassan-26b04b251/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Mudath-thir-HM" target="_blank">
            <FaGithub />
          </a>
          <a href="https://wa.me/2349021727645" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="mailto:eighthmudathir@gmail.com">
            <SiGmail />
          </a>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="rounded-full w-10 p-3 mt-4 text-sm text-[color:var(--color-text) border border-[color:var(--color-border) hover:opacity-80 transition-all]] cursor-pointer"
        >
          {isDark ? <MdDarkMode /> : <MdOutlineLightMode />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
