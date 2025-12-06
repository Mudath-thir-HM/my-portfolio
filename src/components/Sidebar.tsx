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
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";

const Sidebar = ({
  isToggled,
  setIsToggled,
}: {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggled = () => {
    setIsToggled((prev) => !prev);
  };

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

  // Mobile: Show/hide with translate
  // Desktop: Expand/collapse with width change
  const mobileClasses = isMobile
    ? isToggled
      ? "translate-x-0" // Visible on mobile
      : "-translate-x-full" // Hidden on mobile
    : "translate-x-0"; // Always visible on desktop

  const desktopWidth =
    !isMobile && isToggled ? "md:w-16" : "md:w-[300px] lg:w-2/7";
  const toggledWidth = isToggled && !isMobile ? "w-16" : "w-[280px]";

  return (
    <aside
      className={`${toggledWidth} h-screen overflow-y-auto bg-[color:var(--color-bg)] border-r 
      border-[color:var(--color-border)] fixed left-0 top-0 p-1 text-center 
      pt-4 flex flex-col justify-between transition-all duration-300 ease-in-out z-50
      ${mobileClasses} ${desktopWidth}`}
    >
      <div className="w-full">
        <div
          className={`flex flex-row ${
            isToggled && !isMobile ? "justify-center" : "justify-start"
          } items-center`}
        >
          <button
            onClick={handleToggled}
            className={`cursor-pointer mt-5 ${
              isToggled && !isMobile ? "mx-auto" : "ml-0 mr-0"
            }`}
          >
            {isToggled && !isMobile ? (
              <GoSidebarCollapse className="w-5 h-5" />
            ) : (
              <GoSidebarExpand className="w-5 h-5" />
            )}
          </button>
        </div>

        <div
          className={`flex flex-col mb-6 gap-5 pt-4 ${
            isToggled && !isMobile ? "items-center" : "items-center lg:flex-row"
          }`}
        >
          <img
            src={profilePic}
            alt="profile"
            className="rounded-full w-10 h-10 md:w-10 md:h-10 mb-3"
          />

          {!(isToggled && !isMobile) && (
            <div className="flex flex-col text-left">
              <h2 className="font-semibold text-sm md:text-lg text-[color:var(--color-heading)]">
                Mudath-thir Hassan
              </h2>
              <p className="text-sm text-[color:var(--color-text)]">
                Fullstack Software Engineer
              </p>
            </div>
          )}
        </div>

        <nav className="space-y-2 mb-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => isMobile && setIsToggled(false)} // Close sidebar on mobile after clicking
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md transition sm:items-center mb-1 
                ${isToggled && !isMobile ? "justify-center" : "justify-start"} 
                ${
                  isActive
                    ? "bg-[color:var(--color-border)] text-[color:var(--color-heading)] font-medium shadow-sm"
                    : "text-[color:var(--color-text)] hover:bg-[color:var(--color-border)]"
                }`
              }
            >
              {item.icon}
              {!(isToggled && !isMobile) && (
                <span className="md:inline">{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        className={`flex flex-col ${
          isToggled && !isMobile ? "items-center" : "items-start"
        } pt-4 pb-4 px-2`}
      >
        {!(isToggled && !isMobile) && (
          <h3 className="font-semibold text-sm mb-2 text-[color:var(--color-subheading)]">
            Socials
          </h3>
        )}

        <div
          className={`flex ${
            isToggled && !isMobile ? "flex-col" : "flex-row"
          } items-center gap-3 text-[color:var(--color-text)]`}
        >
          <a
            href="https://www.linkedin.com/in/mudath-thir-hassan-26b04b251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mudath-thir-HM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/2348100976947"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a href="mailto:eighthmudathir@gmail.com">
            <SiGmail />
          </a>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="rounded-full w-10 p-3 mt-4 text-sm text-[color:var(--color-text)] border border-[color:var(--color-border)] hover:opacity-80 transition-all cursor-pointer"
        >
          {isDark ? <MdDarkMode /> : <MdOutlineLightMode />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
