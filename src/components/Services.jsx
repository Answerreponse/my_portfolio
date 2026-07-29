/*import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

function Services() {
  const services = [
    { icon: <FaCode />, title: "Web Development", desc: "Building responsive and modern web applications." },
    { icon: <FaLaptopCode />, title: "UI/UX Design", desc: "Designing user-friendly interfaces using modern tools." },
    { icon: <FaMobileAlt />, title: "App Development", desc: "Creating cross-platform mobile applications." },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">My Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition">
              <div className="text-5xl text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; */


import { FaCode, FaLaptopCode, FaMobile } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Modern and responsive websites."
    },
    {
      icon: <FaLaptopCode />,
      title: "UI/UX Design",
      desc: "Clean and attractive interfaces."
    },
    {
      icon: <FaMobile />,
      title: "Mobile Apps",
      desc: "Cross-platform mobile applications."
    }
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-100 dark:bg-slate-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl text-blue-500 mb-4">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;