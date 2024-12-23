import Intro from "../components/introduction/intro";
import About from "../components/aboutme/about";
import Project from "../components/projects/project";
import Contact from "../components/contacts/contact";

function Home() {
  return (
    <div style={{ overflow: "auto" }}>
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
