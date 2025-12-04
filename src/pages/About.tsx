import image1 from "../assets/img11.jpeg";
import image2 from "../assets/img12.jpeg";
import image3 from "../assets/img13.jpeg";
import image4 from "../assets/img14.jpeg";

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
    </>
  );
};

export default About;
