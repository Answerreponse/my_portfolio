import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="
      bg-white
      text-gray-900
      dark:bg-slate-950
      dark:text-white
      transition-colors
      duration-500
      min-h-screen
    "
    >
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;