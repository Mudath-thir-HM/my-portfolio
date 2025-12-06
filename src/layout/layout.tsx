import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { GoSidebarCollapse } from "react-icons/go";

const Layout = () => {
  const [isToggled, setIsToggled] = useState(false);
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

  const EXPANDED_MARGIN = "md:ml-[300px] lg:ml-[28%]";
  const COLLAPSED_MARGIN = "md:ml-16";

  const getMarginClass = () => {
    if (isToggled) {
      return `${COLLAPSED_MARGIN}`;
    } else {
      return `${EXPANDED_MARGIN}`;
    }
  };

  return (
    <div className="flex flex-row relative">
      <Sidebar isToggled={isToggled} setIsToggled={setIsToggled} />

      {/* Mobile Menu Button - Fixed top left */}
      {isMobile && !isToggled && (
        <button
          onClick={() => setIsToggled(true)}
          className="fixed top-4 left-4 z-50 p-3 rounded-full bg-[color:var(--color-subheading)] 
                     text-[color:var(--color-heading)] shadow-lg hover:opacity-90 
                     transition-all duration-200 md:hidden border 
                     border-[color:var(--color-heading)]"
        >
          <GoSidebarCollapse />
        </button>
      )}

      {/* Overlay for mobile when sidebar is open */}
      {isToggled && isMobile && (
        <div
          onClick={() => setIsToggled(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        />
      )}

      <section
        className={`w-full p-3 md:p-10 min-h-screen bg-[color:var(--color-bg)] 
        overflow-y-auto relative transition-all duration-300 ease-in-out ${getMarginClass}`}
      >
        {/* Animated background lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <style>{`
            @keyframes moveLine1 {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100vw);
              }
            }
            @keyframes moveLine2 {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100vw);
              }
            }
            @keyframes moveLine3 {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100vw);
              }
            }
            @keyframes moveLine4 {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100vw);
              }
            }
            @keyframes moveLine5 {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100vw);
              }
            }
            
            .line-1 {
              animation: moveLine1 15s linear infinite;
              animation-delay: 0s;
            }
            .line-2 {
              animation: moveLine2 18s linear infinite;
              animation-delay: 3s;
            }
            .line-3 {
              animation: moveLine3 20s linear infinite;
              animation-delay: 6s;
            }
            .line-4 {
              animation: moveLine4 16s linear infinite;
              animation-delay: 9s;
            }
            .line-5 {
              animation: moveLine5 22s linear infinite;
              animation-delay: 12s;
            }
          `}</style>

          {/* Line 1 */}
          <div
            className="line-1 absolute h-[3px] bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent"
            style={{
              top: "15%",
              width: "40%",
              rotate: "30deg",
            }}
          />

          {/* Line 2 */}
          <div
            className="line-2 absolute h-[3px] bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent"
            style={{
              top: "35%",
              width: "30%",
              rotate: "30deg",
            }}
          />

          {/* Line 3 */}
          <div
            className="line-3 absolute h-[3px] bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent"
            style={{
              top: "55%",
              width: "50%",
              rotate: "30deg",
            }}
          />

          {/* Line 4 */}
          <div
            className="line-4 absolute h-[3px] bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent"
            style={{
              top: "70%",
              width: "35%",
              rotate: "30deg",
            }}
          />

          {/* Line 5 */}
          <div
            className="line-5 absolute h-[3px] bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent"
            style={{
              top: "85%",
              width: "45%",
              rotate: "30deg",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pl-3 md:pl-10">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Layout;
