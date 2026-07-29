function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-r from-blue-600 to-purple-700 dark:from-slate-900 dark:to-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-400">Reponse Isabwe</span>
        </h1>

        <p className="text-xl text-gray-200 mb-6">
          Full Stack Developer specializing in React, Node.js,
          Express, MongoDB and Tailwind CSS.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;