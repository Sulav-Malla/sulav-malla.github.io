import Intro from "../components/introduction/intro";
import About from "../components/aboutme/about";
import Project from "../components/projects/project";
function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Project />
    </div>
  );
}

export default Home;
