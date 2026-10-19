import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// page order matches Navbar links; copy lives in src/data/content.js
function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <Background />
      <Navbar />
      <Hero />
      <Quotes />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
