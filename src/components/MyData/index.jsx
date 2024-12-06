import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineFactCheck } from "react-icons/md";
import p1 from "../../assets/web-film-boostrap.jpg";
import p2 from "../../assets/web-film-react.jpg";
import p3 from "../../assets/web-resto.jpg";

export const MySkills = () => {
  const mySkills = [
    { id: 1, logoSkill: <FaHtml5 />, nameSkill: "HTML", level: "75%" },
    { id: 2, logoSkill: <FaCss3Alt />, nameSkill: "CSS", level: "70%" },
    {
      id: 3,
      logoSkill: <IoLogoJavascript />,
      nameSkill: "JAVASCRIPT",
      level: "80%",
    },
    { id: 4, logoSkill: <FaReact />, nameSkill: "REACT JS", level: "60%" },
    { id: 5, logoSkill: <RiNextjsFill />, nameSkill: "NEXT JS", level: "40%" },
  ];
  return mySkills;
};

export const ItemServices = () => {
  const itemServices = [
    {
      id: 1,
      icoService: <BsPersonVcard />,
      nameService: "Portfolio Website Development",
      descService:
        "Create personal or portfolio websites for professionals like designers, photographers, artists, or developers",
    },
    {
      id: 2,
      icoService: <CgWebsite />,
      nameService: "Small Business Website Development",
      descService:
        "Build professional websites for small businesses like cafes, salons, shops, or local services",
    },
    {
      id: 3,
      icoService: <MdOutlineFactCheck />,
      nameService: "Landing Page Creation",
      descService:
        "Design a single-page website optimized for promotions, offers, or lead generation",
    },
  ];
  return itemServices;
};

export const ItemPortfolio = () => {
  const itemPortfolio = [
    {
      id: 1,
      portfolio: p1,
      descPortfolio: "Personal Film Website: Powered by Bootstrap",
    },
    {
      id: 2,
      portfolio: p2,
      descPortfolio:
        "Interactive Movie Platform: Powered by React and Tailwind",
    },
    {
      id: 3,
      portfolio: p3,
      descPortfolio: "Delicious Design: Tailwind Restaurant Website",
    },
  ];
  return itemPortfolio;
};
