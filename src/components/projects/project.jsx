import "./project.css";
import assetpic from "../../assets/calculator.jpg";
function Project() {
  return (
    <section id="project">
      <header className="projectHeader">Projects</header>
      <div className="projectContainer">
        <a
          href="https://github.com/takeo-practical-session/Calculator-HTML-and-JS"
          className="projectLinks"
        >
          <div className="projectContent">
            <div className="projectPicture">
              <img src={assetpic} alt="calculator"></img>
            </div>
            <div className="projectDescription">
              <h2>Calculator</h2>
              <p>
                A simple calculator that can perform basic arithmetic
                operations. It was built using React.js. The calculator can
                perform addition, subtraction, multiplication, division, and
                modulo operations. The calculator also has different features
                like a history log and has dark and light themes for the eyes.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Project;
