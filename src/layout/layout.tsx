import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [isToggled, setIsToggled] = useState(false);

  const EXPANDED_MARGIN = "md:ml-[300px] lg:ml-[28%]";
  const COLLAPSED_MARGIN = "md:ml-16";
  const baseMargin = isToggled ? "ml-16" : "md:ml-[300px]";

  const getMarginClass = () => {
    if (isToggled) {
      // Mobile: No margin needed, content is full width
      // Desktop: Collapsed margin
      return `${COLLAPSED_MARGIN}`;
    } else {
      // Mobile: No margin needed
      // Desktop: Expanded margin
      return `${EXPANDED_MARGIN}`;
    }
  };

  return (
    <div className="flex flex-row relative">
      <Sidebar isToggled={isToggled} setIsToggled={setIsToggled} />
      <section
        className={`${baseMargin} w-full p-3 md:p-10 min-h-screen bg-[color:var(--color-bg)] 
        overflow-y-auto relative transition-all duration-300 ease-in-out ${getMarginClass}`}
      >
        {isToggled && (
          <div
            onClick={() => setIsToggled(false)}
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          />
        )}
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
        <div className="relative z-10">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Layout;
