import "./project.css";
import assetpic from "../../assets/calculator.jpg";
import playfulLogo from "../../assets/playful_logo.png"; // Import Playfulingo logo

function Project() {
  return (
    <section id="project">
      <header className="projectHeader">Made with Code</header>
      <hr className="projectSectionDivider" />
      <div className="projectContainer">
        <div className="projectContent">
          <a
            href="https://github.com/takeo-practical-session/Calculator-HTML-and-JS"
            className="projectLinks"
          >
            <div className="projectPicture">
              <img src={assetpic} alt="calculator"></img>
            </div>
          </a>
          <div className="projectDescription">
            <h2>Calculator</h2>
            <ul>
              <li>Built using React.js</li>
              <li>Performs basic arithmetic operations</li>
              <li>Features a history log</li>
              <li>Supports dark and light themes</li>
            </ul>
          </div>
        </div>
        <div className="projectContent">
          <a
            href="https://github.com/shahks-hub/Playfulingo"
            className="projectLinks"
          >
            <div className="projectPicture">
              <img src={playfulLogo} alt="Playfulingo logo"></img>
            </div>
          </a>
          <div className="projectDescription">
            <h2>Playfulingo: ASL Learning APP</h2>
            <ul>
              <li>Implemented gesture detection</li>
              <li>Designed the frontend</li>
              <li>Helps users learn American Sign Language (ASL)</li>
              <li>Interactive and engaging activities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
