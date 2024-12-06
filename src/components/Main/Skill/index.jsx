const Skill = (Props) => {
  const { mySkills } = Props;
  return (
    <section className="flex items-center gap-32 px-20 my-10 bg-gray-100">
      {mySkills.map((item) => (
        <div
          key={item.id}
          className="flex justify-center w-full py-8 text-gray-300 text-7xl"
        >
          {item.logoSkill}
        </div>
      ))}
    </section>
  );
};

export default Skill;
