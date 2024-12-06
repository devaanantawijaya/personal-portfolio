import foto from "../../../assets/Foto Non Formal_Deva Anantawijaya.jpg";
import Button from "../../Button";

const Banner = () => {
  return (
    <section className="grid items-center grid-cols-[6fr_4fr] gap-10 px-20 py-10">
      <div>
        <h3 className="pb-3 text-xl font-semibold">Welcome to my Portfolio</h3>
        <h1 className="pb-2 text-6xl font-bold">{`Hi I'm`}</h1>
        <h1 className="pb-3 text-6xl font-bold text-blue-500">
          Deva Anantawijaya
        </h1>
        <h1 className="pb-5 text-6xl font-bold">Front-End Developer</h1>
        <p className="pb-8 pr-10">
          As a Front-End Developer, I strive to turn ideas into interactive,
          dynamic, and engaging digital experiences. I enjoy solving design
          challenges and delivering clean, maintainable code.
        </p>
        <div className="flex gap-8">
          <div>
            <Button title="Hire Me!" bgColor="bg-blue-500" />
          </div>
          <div>
            <Button title="Download CV" bgColor="bg-white" />
          </div>
        </div>
      </div>
      <div className="">
        <img src={foto} alt="" className="rounded-full" />
      </div>
    </section>
  );
};

export default Banner;
