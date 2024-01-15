import Divider from "./Components/Divider";
import NavBar from "./Components/NavBar";
import TextBanner from "./Components/TextBanner";
import About from "./Components/Sections/About";
import Skills from "./Components/Sections/Skills";
import PersonalProjects from "./Components/Sections/PersonalProjects";
import WorkProjects from "./Components/Sections/WorkProjects";
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
            {/* <TextBanner /> */}
            <h1 class="typing">Welcome Employers;</h1>
          </div>
          <Divider id="about" />
          <About />
          <Divider id="skills" />
          <Skills />
          <Divider id="projects" />
          <WorkProjects />
          <Divider id="projects" />
          <PersonalProjects />
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
