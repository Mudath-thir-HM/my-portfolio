import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiPrisma, SiTypescript } from "react-icons/si";

export const SliderContent = () => {
  return (
    <>
      <SiTypescript className="w-6 h-6 md:w-13 md:h-13 flex-shrink-0" />
      <FaReact className="w-6 h-6 md:w-13 md:h-13 flex-shrink-0" />
      <RiNextjsFill className="w-6 h-6 md:w-13 md:h-13 flex-shrink-0" />
      <FaNodeJs className="w-6 h-6 md:w-13 md:h-13 flex-shrink-0" />
      <BiLogoPostgresql className="w-6 h-6 md:w-13 md:h-13 flex-shrink-0" />
      <SiPrisma className="w-6 h-6 md:w-13 md:h-13 flex-shrink-0" />
      <SiJavascript className="w-6 h-6 md:w-13 md:h-13 flex-shrink-0" />
      <RiTailwindCssFill className="w-6 h-6 md:w-13 md:h-13 flex-shrink-0" />
    </>
  );
};
