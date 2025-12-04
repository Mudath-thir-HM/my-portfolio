import cert1 from "../assets/001.jpg";
import cert2 from "../assets/002.jpeg";

const Certifications = () => {
  const certifications = [
    {
      imageSrc: cert1,
      id: "certificate1",
      description: "Full-stack developer at IHIFIX Innovation Hub",
    },
    {
      imageSrc: cert2,
      id: "certificate2",
      description:
        "Artificial intelligence carrier essentials (AICE) at alx Africa",
    },
  ];
  return (
    <>
      <h1 className="text-center text-xl md:text-3xl font-bold text-[color:var(--color-heading)] mt-6 md:mt-0">
        My certifications 🎖️
      </h1>
      <section className="flex flex-col md:flex-wrap gap-5 mt-13">
        {certifications.map((certificate) => (
          <div className="flex flex-col gap-3 p-2" key={certificate.id}>
            <img
              src={certificate.imageSrc}
              alt="a certificate"
              className="rounded-md"
            />
            <p className="text-center text-sm md:text-lg font-bold">
              {certificate.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Certifications;
