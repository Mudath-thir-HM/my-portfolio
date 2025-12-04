import { useState } from "react";

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/documents/resume.pdf"; // Path to your PDF in public folder
    link.download = "Mudath-thir_Hassan_Resume.pdf"; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-center text-[color:var(--color-heading)] text-xl md:text-3xl mb-8">
        My Resume 📄
      </h1>

      <p className="text-center text-[color:var(--color-text)] mb-12 max-w-md">
        Download my resume to learn more about my experience, skills, and
        qualifications.
      </p>

      {/* Animated Button Container */}
      <div className="relative flex items-center justify-center">
        {/* Orbiting Circles */}
        <div className="absolute w-64 h-64 pointer-events-none">
          {/* Circle 1 */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "8s" }}
          >
            <div
              className="absolute top-0 left-1/2 w-4 h-4 -ml-2 rounded-full opacity-70"
              style={{
                backgroundColor: "var(--color-heading)",
                boxShadow: "0 0 10px var(--color-heading)",
              }}
            />
          </div>

          {/* Circle 2 */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "6s", animationDirection: "reverse" }}
          >
            <div
              className="absolute top-1/2 right-0 w-3 h-3 -mt-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "var(--color-subheading)",
                boxShadow: "0 0 10px var(--color-subheading)",
              }}
            />
          </div>

          {/* Circle 3 */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "10s" }}
          >
            <div
              className="absolute bottom-0 left-1/2 w-5 h-5 -ml-2.5 rounded-full opacity-70"
              style={{
                backgroundColor: "var(--color-text)",
                boxShadow: "0 0 10px var(--color-text)",
              }}
            />
          </div>

          {/* Circle 4 */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "7s", animationDirection: "reverse" }}
          >
            <div
              className="absolute top-1/2 left-0 w-3.5 h-3.5 -mt-1.75 rounded-full opacity-60"
              style={{
                backgroundColor: "var(--color-border)",
                boxShadow: "0 0 10px var(--color-border)",
              }}
            />
          </div>

          {/* Circle 5 */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "9s" }}
          >
            <div
              className="absolute top-1/4 right-1/4 w-2.5 h-2.5 rounded-full opacity-70"
              style={{
                backgroundColor: "var(--color-heading)",
                boxShadow: "0 0 10px var(--color-heading)",
              }}
            />
          </div>

          {/* Circle 6 */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "11s", animationDirection: "reverse" }}
          >
            <div
              className="absolute bottom-1/4 left-1/4 w-4 h-4 rounded-full opacity-60"
              style={{
                backgroundColor: "var(--color-subheading)",
                boxShadow: "0 0 10px var(--color-subheading)",
              }}
            />
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-10 px-8 py-4 rounded-full font-semibold text-lg
                     border-2 transform transition-all duration-300 ease-out
                     hover:scale-110 hover:shadow-2xl
                     focus:outline-none active:scale-95"
          style={{
            backgroundColor: "var(--color-heading)",
            borderColor: "var(--color-border)",
            color: "var(--color-bg)",
            boxShadow: isHovered
              ? "0 20px 40px var(--color-border)"
              : "0 10px 25px var(--color-border)",
          }}
        >
          <span className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </span>

          {/* Button Glow Effect */}
          {isHovered && (
            <span
              className="absolute inset-0 rounded-full opacity-20 animate-ping"
              style={{ backgroundColor: "var(--color-text)" }}
            />
          )}
        </button>
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center text-sm text-[color:var(--color-text)] opacity-70">
        <p>PDF format • Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Resume;
