import Button from "../../Button";

const AboutMe = (Props) => {
  const { mySkills } = Props;
  return (
    <section className="grid grid-cols-2 gap-10 px-20 py-10">
      <div className="text-right">
        <h3 className="pb-3 text-xl font-semibold text-blue-500">ABOUT ME</h3>
        <h1 className="pb-5 text-5xl font-bold text-blue-500">
          1 Year of Experience
        </h1>
        <h1 className="pb-6 text-5xl font-bold">in Web Development</h1>
        <p>{`Hello there! I'm Deva Anantawijaya, specializing in web development with a focus on responsive and user-friendly designs. Proficient in HTML, CSS, and JavaScript, I’m currently advancing my skills in React.js for building dynamic applications. Let’s connect and collaborate to create amazing web experiences!`}</p>
      </div>
      <div>
        <div className="flex gap-5 pb-4">
          <div>
            <Button title="Main Skills" bgColor="bg-blue-500" />
          </div>
          <div>
            <Button title="Education" bgColor="bg-white" />
          </div>
        </div>
        <div>
          {mySkills.map((item) => (
            <div className="pb-3" key={item.id}>
              <h1 className="pb-1 font-semibold">{item.nameSkill}</h1>
              <div className="w-full h-5 bg-gray-100 rounded-full">
                <div
                  className={`w-[0] bg-blue-500 h-full rounded-full`} style={{ width: item.level}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
