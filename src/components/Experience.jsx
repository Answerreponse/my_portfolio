function Experience() {
  const experiences = [
    {
      year: "2023 - 2024",
      title: "UI / Frontend Development Learning + Internship",
      company: "EAV Gitwe TSS",
      description:
        "Learned HTML, CSS, JavaScript, UI/UX Design, Vue.js and responsive web development.",
    },
    {
      year: "2024 - 2025",
      title: "Backend Development Learning + Internship",
      company: "Csamz tss(Learning) and DynaSoft Company Ltd(Internship)",
      description:
        "Worked with databases, APIs, PHP, MySQL, Node.js and Other backend systems.",
    },
    {
      year: "2025 - 2026",
      title: "Full Stack Development + Internship",
      company: "CSAMZ TSS and E-notifier company ltd(Internship)",
      description:
        "Built complete web applications using frontend(ReactJs,...) and backend technologies(Python, NodeJs,...).",
    },
    {
      year: "2026",
      title: "Professional Training",
      company: "", //Lanari Tech Ltd
      description:
        "Advanced training in modern software development and deployment.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience & Education
        </h2>

        <div className="relative border-l-4 border-blue-500 ml-4">
          {experiences.map((item, index) => (
            <div key={index} className="mb-10 ml-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-2"></div>

              <span className="text-blue-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-300 font-medium">
                {item.company}
              </p>

              <p className="text-gray-400 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;