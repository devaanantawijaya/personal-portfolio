import { FaArrowRightLong } from "react-icons/fa6";

export const CardServices = (Props) => {
  const { card, key } = Props;
  return (
    <div
      key={key}
      className="grid grid-rows-3 gap-2 p-5 border-2 border-gray-300 rounded-xl"
    >
      <div className="text-blue-500 text-7xl">{card.icoService}</div>
      <h1 className="text-3xl font-bold">{card.nameService}</h1>
      <p className="">{card.descService}</p>
      <div className="flex items-center gap-2 text-blue-500">
        <button className="font-semibold">Learn more</button>
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export const CardProjects = (Props) => {
  const { card, key } = Props;
  return (
    <div className="text-center" key={key}>
      <img
        src={card.portfolio}
        alt=""
        className="w-full border-2 border-black h-96 rounded-xl"
      />
      <p className="py-3 font-semibold">
        {card.descPortfolio.length > 45
          ? card.descPortfolio.slice(0, 45) + "..."
          : card.descPortfolio}
      </p>
    </div>
  );
};
