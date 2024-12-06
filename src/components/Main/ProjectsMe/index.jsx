import Button from "../../Button";
import { CardProjects } from "../../Card";

const ProjectsMe = (Props) => {
  const { itemPortfolio } = Props;
  return (
    <section className="py-10 text-center">
      <div>
        <h3 className="pb-5 text-xl font-semibold text-blue-500">
          PROJECTS ME
        </h3>
        <h1 className="pb-10 text-5xl font-bold">
          A Collection of My Web Projects
        </h1>
      </div>
      <div className="flex justify-center gap-5 pb-10">
        <div>
          <Button title="ALL" bgColor="bg-blue-500" />
        </div>
        <div>
          <Button title="Portfolio Web" bgColor="bg-white" />
        </div>
        <div>
          <Button title="Business Web" bgColor="bg-white" />
        </div>
        <div>
          <Button title="Landing Page" bgColor="bg-white" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 px-20">
        {itemPortfolio.map((card) => (
          <CardProjects card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsMe;
