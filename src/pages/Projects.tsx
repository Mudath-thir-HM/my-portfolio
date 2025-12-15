import webImage1 from "../assets/homepage.png";
import webImage2 from "../assets/smartevent.png";
import webImage3 from "../assets/devfolio.png";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiPrisma, SiTypescript } from "react-icons/si";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

const Projects = () => {
  const webDetails = [
    {
      imageUrl: webImage1,
      url: "https://bira-im.vercel.app",
      description: "Bira'eem",
      extraInfo:
        "An Adaptive E-Learning Platform for Secondary Schools featuring personalized learning paths, gamification, and a dynamic dashboard for student progress.",
      id: "no1",
      techStack: [
        <RiNextjsFill />,
        <SiPrisma />,
        <SiTypescript />,
        <RiReactjsFill />,
        <SiPostgresql />,
        <RiTailwindCssFill />,
      ],
    },
    {
      imageUrl: webImage2,
      url: "https://smarrtevent.netlify.app",
      description: "SmarrtEvent",
      extraInfo:
        "An Event Planning Platform a modern app that streamlines event creation, registration, and user engagement.",
      id: "no2",
      techStack: [
        <RiReactjsFill />,
        <FaNodeJs />,
        <SiPostgresql />,
        <RiTailwindCssFill />,
        <SiTypescript />,
      ],
    },
    {
      imageUrl: webImage3,
      url: "https://devfoliofrontend.netlify.app",
      description: "Devfolio",
      extraInfo:
        "A Portfolio & Project Showcase Builder</b> a simple tool that helps creators build personal pages and share their work for feedback.",
      id: "no3",
      techStack: [
        <FaHtml5 />,
        <FaCss3 />,
        <DiJavascript />,
        <FaNodeJs />,
        <SiPostgresql />,
      ],
    },
  ];

  return (
    <section>
      <h1 className="font-bold text-center text-[color:var(--color-heading)] text-xl md:text-3xl pt-5 md:pt-0">
        My Projects 💻
      </h1>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap mt-3">
        {webDetails.map((webDetail) => (
          <div
            className="flex flex-col gap-4 items-center p-4 rounded-md w-full lg:w-[24%] hover:scale-110
                       bg-[color:var(--color-bg)] transition-all border border-[color:var(--color-border)]"
            key={webDetail.id}
          >
            <a
              href={webDetail.url}
              target="_blank"
              className="border-b-2 border-b-[color:var(--color-subheading)] py-2"
            >
              <img src={webDetail.imageUrl} alt="" className="rounded-md" />
            </a>
            <h3 className="text-[color:var(--color-subheading)] text-lg">
              <b>{webDetail.description}</b>
            </h3>
            <p className="text-center">{webDetail.extraInfo}</p>
            <div className="flex flex-row gap-3 flex-wrap items-center">
              {webDetail.techStack.map((tech) => (
                <div className="rounded-full border-2 border-[color:var(--color-border)] p-2">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
