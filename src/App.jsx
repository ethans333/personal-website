import Divider from "./Components/Divider";
import NavBar from "./Components/NavBar";
import About from "./Components/Sections/About";
import Skills from "./Components/Sections/Skills";
import Projects from "./Components/Sections/Projects";
import Achievements from "./Components/Sections/Achievements";
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <NavBar />
      <div className="pl-10 pr-10 w-full xl:flex xl:items-center xl:justify-center">
        <div className="spacing-y xl:w-2/3">
          <div className="mb-64 xl:mb-96">
            <h1 class="typing">Welcome Employersss;</h1>
          </div>
          <Divider id="about" />
          <About />
          <Divider id="skills" />
          <Skills />
          <Divider id="projects" />
          <Projects />
          <Divider id="achievements" />
          <Achievements />
          <Divider id="contact" />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
