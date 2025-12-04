import webImage1 from "../assets/homepage.png";
import webImage2 from "../assets/smartevent.png";
import webImage3 from "../assets/devfolio.png";

const Projects = () => {
  const webDetails = [
    {
      imageUrl: webImage1,
      url: "https://bira-im.vercel.app",
      description: "Bira'eem",
      id: "no1",
    },
    {
      imageUrl: webImage2,
      url: "https://smarrtevent.netlify.app",
      description: "SmarrtEvent",
      id: "no2",
    },
    {
      imageUrl: webImage3,
      url: "https://devfoliofrontend.netlify.app",
      description: "Devfolio",
      id: "no3",
    },
  ];

  return (
    <section>
      <h1 className="font-bold text-center text-[color:var(--color-heading)] text-xl md:text-3xl pt-5 md:pt-0">
        My Projects 💻
      </h1>
      <div className="flex flex-row gap-4 flex-wrap mt-3">
        {webDetails.map((webDetail) => (
          <div
            className="flex flex-col justify-center gap-2 items-center p-4 rounded-md"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
