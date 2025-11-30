import { SliderContent } from "../lib/content";
import image1 from "../assets/img11.jpeg";
import image2 from "../assets/img12.jpeg";
import image3 from "../assets/img13.jpeg";
import image4 from "../assets/img14.jpeg";

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
        <h1 className="text-4xl font-bold mb-4">👋 I'm Mudath-thir Hassan</h1>
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
    </>
  );
}
