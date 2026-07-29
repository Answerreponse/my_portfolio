function Skills() {
  const skills = [
    { name: "React.js", level: "90%" },
    { name: "Node.js", level: "85%" },
    { name: "Express.js", level: "85%" },
    { name: "MongoDB", level: "80%" },
    { name: "Tailwind CSS", level: "95%" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-950 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="w-full bg-gray-300 dark:bg-slate-700 h-3 rounded-full">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;