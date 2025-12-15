import { SiJavascript, SiPrisma, SiTypescript } from "react-icons/si";
import image1 from "../assets/img11.jpeg";
import image2 from "../assets/img12.jpeg";
import image3 from "../assets/img13.jpeg";
import image4 from "../assets/img14.jpeg";
import { SliderContent } from "../lib/content";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

const About = () => {
  const imageDetails = [
    { imageSrc: image1, id: "img1" },
    { imageSrc: image2, id: "img2" },
    { imageSrc: image3, id: "img3" },
    { imageSrc: image4, id: "img4" },
  ];

  return (
    <>
      <section>
        <h1 className="font-bold text-xl md:text-3xl text-[color:var(--color-heading)] pt-6 md:pt-0">
          About Me! 🔭
        </h1>
        <p className="mt-6">
          I am a passionate diver constantly diving and exploring the sea of
          programming. Trying to catch up to the current trend seems impossible
          but when I look back I see I have gained so much that my past self
          never thought could attain. A casual basketballer and aspiring cyclist
          that loves working in teams and finds pride in lightening the mood.
        </p>
      </section>
      <section className="flex flex-col mt-13 gap-6 items-center justify-center ">
        <div className="flex flex-row gap-2 md:flex-wrap md:justify-center overflow-x-auto mobile-scroll w-full snap-x snap-mandatory px-4 md:px-0">
          {imageDetails.map((image) => (
            <img
              src={image.imageSrc}
              key={image.id}
              alt="an image"
              width={480}
              height={620}
              className="w-40 h-52 rounded-md bg-cover"
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-5 mt-13">
        <h2 className="text-center text-[color:var(--color-subheading)] text-2xl md:text-4xl font-bold">
          Technologies I use...
        </h2>
        <div className="mt-13 overflow-hidden relative">
          <style>{`
                  @keyframes slide {
                    from {
                      transform: translateX(0);
                    }
                    to {
                      transform: translateX(-50%);
                    }
                  }
                  .animate-slide {
                    animation: slide 20s linear infinite;
                    display: flex;
                    gap: 3.75rem;
                  }
                `}</style>

          <div className="animate-slide" style={{ width: "max-content" }}>
            <div className="flex gap-15">
              {/* First set */}
              <SliderContent />
            </div>
            <div className="flex gap-15">
              {/* First set */}
              <SliderContent />
            </div>
          </div>

          <div className="flex flex-row gap3 justify-around items-center mt-8 ">
            <div className="flex-col flex gap-6">
              <span className="flex flex-row gap-2 text-xl md:text-2xl">
                <SiTypescript className="w-5 h-5 md:w-9 md:h-9" />
                TypeScript
              </span>
              <span className="flex flex-row gap-2 text-xl md:text-2xl">
                <FaReact className="w-5 h-5 md:w-9 md:h-9" />
                React.js
              </span>
              <span className="flex flex-row gap-2 text-xl md:text-2xl">
                <RiNextjsFill className="w-5 h-5 md:w-9 md:h-9" />
                Next.js
              </span>
              <span className="flex flex-row gap-2 text-xl md:text-2xl">
                <FaNodeJs className="w-5 h-5 md:w-9 md:h-9" />
                Node.js
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="flex flex-row gap-2 text-xl md:text-2xl">
                <BiLogoPostgresql className="w-5 h-5 md:w-9 md:h-9" />
                PostgreSQL
              </span>
              <span className="flex flex-row gap-2 text-xl md:text-2xl">
                <SiPrisma className="w-5 h-5 md:w-9 md:h-9" />
                Prisma
              </span>
              <span className="flex flex-row gap-2 text-xl md:text-2xl">
                <SiJavascript className="w-5 h-5 md:w-9 md:h-9" />
                JavaScript
              </span>
              <span className="flex flex-row gap-2 text-xl md:text-2xl">
                <RiTailwindCssFill className="w-5 h-5 md:w-9 md:h-9" />
                TailwindCSS
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
