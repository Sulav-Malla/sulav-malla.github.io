import "./project.css";
import assetpic from "../../assets/calculator.jpg";
import playfulLogo from "../../assets/playful_logo.jpg";
import htmlDesignPic from "../../assets/html_design.png"; // Add image for HTML Web Design
import responsiveDesignPic from "../../assets/responsive_design.png"; // Add image for Responsive Designs

function Project() {
  return (
    <section id="project">
      <header className="projectHeader">Made with Code</header>
      <hr className="projectSectionDivider" />
      <div className="projectContainer">
        <div className="projectContent">
          <div className="projectBox">
            <div className="projectTitle">Calculator</div>
            <div className="projectPicture">
              <img src={assetpic} alt="calculator"></img>
            </div>
            <div className="projectDescription">
              <p>
                A React.js application that performs basic arithmetic
                operations, features a history log, and supports dark and light
                themes.
              </p>
            </div>
          </div>
        </div>
        <div className="projectContent">
          <div className="projectBox">
            <div className="projectTitle">Playfulingo: ASL Learning APP</div>
            <div className="projectPicture">
              <img src={playfulLogo} alt="Playfulingo logo"></img>
            </div>
            <div className="projectDescription">
              <p>
                A Flutter app that helps users learn American Sign Language
                (ASL) through interactive and engaging activities, featuring
                gesture detection and a well-designed frontend.
              </p>
            </div>
          </div>
        </div>
        <div className="projectContent">
          <div className="projectBox">
            <div className="projectTitle">HTML Web Design</div>
            <div className="projectPicture">
              <img src={htmlDesignPic} alt="HTML Web Design"></img>
            </div>
            <div className="projectDescription">
              <p>
                A project showcasing modern HTML web design techniques, focusing
                on clean and responsive layouts.
              </p>
            </div>
          </div>
        </div>
        <div className="projectContent">
          <div className="projectBox">
            <div className="projectTitle">Responsive Designs</div>
            <div className="projectPicture">
              <img src={responsiveDesignPic} alt="Responsive Designs"></img>
            </div>
            <div className="projectDescription">
              <p>
                A collection of responsive design examples, demonstrating
                adaptability across various devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
