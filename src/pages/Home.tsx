import { SliderContent } from "../lib/content";
import image1 from "../assets/img11.jpeg";
import image2 from "../assets/img12.jpeg";
import image3 from "../assets/img13.jpeg";
import image4 from "../assets/img14.jpeg";
import webImage1 from "../assets/homepage.png";
import webImage2 from "../assets/smartevent.png";
import webImage3 from "../assets/devfolio.png";

// src/pages/Home.tsx

export default function Home() {
  const imageDetails = [
    { imageSrc: image1, id: "img1" },
    { imageSrc: image2, id: "img2" },
    { imageSrc: image3, id: "img3" },
    { imageSrc: image4, id: "img4" },
  ];
  return (
    <>
      <section>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          👋 I'm Mudath-thir Hassan
        </h1>
        <p className="text-[color:var(--color-text)] max-w-2xl">
          A Full-Stack developer with 2+ years of experience from Gombe,
          Nigeria. Focused on react and Next.js with Node.js(express) and
          postgress. I love building scalable and organised projects, and have a
          strong passion in building applications, while also being a very
          friendly and easygoing individual.
        </p>
      </section>

      <section className="mt-13 overflow-hidden relative">
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

      <section className="mt-13">
        <h2 className="text-xl md:text-3xl text-[color:var(--color-heading)] my-5">
          <b>Take a look at my past work! 👀</b>
        </h2>
        <p className="text-[color:var(--color-text)]">
          I enjoy building functional, well-designed, and scalable applications
          that solve real problems. <br />I have worked on a range of projects,
          including:
        </p>
        <ul className=" mt-3">
          <li className="text-[color:var(--color-text)] my-2">
            <b>An Event Planning Platform</b> a modern app that streamlines
            event creation, registration, and user engagement.
          </li>
          <li className="text-[color:var(--color-text)] my-2">
            <b>A Portfolio & Project Showcase Builder</b> a simple tool that
            helps creators build personal pages and share their work for
            feedback.
          </li>
          <li className="text-[color:var(--color-text)] my-2">
            <b>An Adaptive E-Learning Platform for Secondary Schools</b>{" "}
            featuring personalized learning paths, gamification, and a dynamic
            dashboard for student progress.
          </li>
        </ul>
        <div className="flex flex-row gap-4 flex-wrap">
          <div className="flex flex-col justify-center gap-2 items-center p-4 rounded-md">
            <a
              href="https://smarrtevent.netlify.app"
              target="_blank"
              className="border-b-2 border-b-[color:var(--color-subheading)] py-2"
            >
              <img src={webImage2} alt="" className="rounded-md" />
            </a>
            <h3 className="text-[color:var(--color-subheading)] text-lg">
              <b>SmarrtEvent</b>
            </h3>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center p-4 rounded-md">
            <a
              href="https://bira-im.vercel.app"
              target="_blank"
              className="border-b-2 border-b-[color:var(--color-subheading)] py-2"
            >
              <img src={webImage1} alt="" className="rounded-md" />
            </a>
            <h3 className="text-[color:var(--color-subheading)] text-lg">
              <b>Bira'eem</b>
            </h3>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center p-4 rounded-md">
            <a
              href="https://devfoliofrontend.netlify.app"
              target="_blank"
              className="border-b-2 border-b-[color:var(--color-subheading)] py-2"
            >
              <img src={webImage3} alt="" className="rounded-md" />
            </a>
            <h3 className="text-[color:var(--color-subheading)] text-lg">
              <b>DevFolio</b>
            </h3>
          </div>
        </div>
      </section>

      <section className="mt-13 text-center">
        <h2 className="text-xl md:text-3xl text-[color:var(--color-heading)] py-5">
          <b>Welcome to my portfolio! 🥳</b>
        </h2>
        <p className="text-[color:var(--color-text)] ">
          Feel free to go through my portfolio and I'm always ready to work.
        </p>
      </section>
    </>
  );
}
