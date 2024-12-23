import "./project.css";
import assetpic from "../../assets/calculator.jpg";
import playfulLogo from "../../assets/playful_logo.jpg";
import counterAppPic from "../../assets/counter_app.png";
import responsiveDesignPic from "../../assets/responsive_design.png";

function Project() {
  return (
    <section id="project">
      <header className="projectHeader">Made with Code</header>
      <hr className="projectSectionDivider" />
      <div className="projectContainer">
        <div className="projectContent">
          <a
            href="https://github.com/Sulav-Malla/Simple-Calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="projectBox">
              <div className="projectTitle">Calculator</div>
              <div className="projectPicture">
                <img src={assetpic} alt="calculator" />
              </div>
              <div className="projectDescription">
                <p>
                  A React.js application that performs basic arithmetic
                  operations, features a history log, and supports dark and
                  light themes.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="projectContent">
          <a
            href="https://github.com/shahks-hub/Playfulingo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="projectBox">
              <div className="projectTitle">Playfulingo: ASL Learning APP</div>
              <div className="projectPicture">
                <img src={playfulLogo} alt="Playfulingo logo" />
              </div>
              <div className="projectDescription">
                <p>
                  A Flutter app that helps users learn American Sign Language
                  (ASL) through interactive and engaging activities, featuring
                  gesture detection and a well-designed frontend.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="projectContent">
          <a
            href="https://github.com/Sulav-Malla/Counter-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="projectBox">
              <div className="projectTitle">React Counter App</div>
              <div className="projectPicture">
                <img src={counterAppPic} alt="React Counter App" />
              </div>
              <div className="projectDescription">
                <p>
                  A project showcasing app developement in React. The app allows
                  users to increment, decrement and reset counters.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="projectContent">
          <a
            href="https://github.com/Sulav-Malla/Responsive-Design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="projectBox">
              <div className="projectTitle">Responsive Designs</div>
              <div className="projectPicture">
                <img src={responsiveDesignPic} alt="Responsive Designs" />
              </div>
              <div className="projectDescription">
                <p>
                  A collection of responsive design examples, demonstrating
                  adaptability across various devices and screen sizes.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
