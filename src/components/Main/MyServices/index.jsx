import { CardServices } from "../../Card";

const MyServices = (Props) => {
  const { itemServices } = Props;
  return (
    <section className="">
      <div className="py-10 text-center">
        <h3 className="pb-3 text-xl font-semibold text-blue-500">SERVICES</h3>
        <h1 className="pb-5 text-5xl font-bold">
          Custom Web Design <span className="text-blue-500">Solutions</span>
        </h1>
        <p className="">
          We create engaging and innovative front-end solutions that transform
          your ideas into impactful web experiences.
        </p>
      </div>
      <div className="grid grid-cols-3 px-20 py-10 gap-7">
        {itemServices.map((card) => (
          <CardServices card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default MyServices;
