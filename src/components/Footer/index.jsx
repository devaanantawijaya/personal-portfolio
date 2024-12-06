import { FaCircleChevronRight } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="grid grid-cols-[1.5fr_6fr_2.5fr] items-center px-20 py-5 bg-blue-500 text-white">
      <div className="flex items-center gap-2">
        <div className="text-5xl">
          <FaCircleChevronRight />
        </div>
        <p className="text-xl font-bold">Personal</p>
      </div>
      <p className="">© Copyright 2024. All Rights Reserved.</p>
      <div className="flex items-center justify-end gap-2">
        <p>FOLLOW ME:</p>
        <div className="flex gap-2 text-2xl">
          <div>
            <FaFacebookSquare />
          </div>
          <div>
            <FaSquareInstagram />
          </div>
          <div>
            <IoLogoLinkedin />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
