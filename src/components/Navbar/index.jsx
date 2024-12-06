import Button from "../Button";
import { FaCircleChevronRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="grid items-center grid-cols-[2.5fr_5fr_2.5fr] px-20 py-5">
      <div className="flex items-center gap-2">
        <div className="text-5xl text-blue-500">
          <FaCircleChevronRight />
        </div>
        <h1 className="text-xl font-bold">Personal</h1>
      </div>
      <ul className="flex justify-center gap-10 font-bold">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Me</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects Me</a>
        </li>
      </ul>
      <div className="flex justify-end">
        <Button title="Let's Chat!" bgColor="bg-blue-500" />
      </div>
    </nav>
  );
};

export default Navbar;
