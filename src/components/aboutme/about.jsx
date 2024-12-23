import "./about.css";
import {
  c_logo,
  js_logo,
  java_logo,
  node_logo,
  react_logo,
  html_logo,
  css_logo,
  express_logo,
  sql_logo,
  redux_logo,
  soccerPic,
  gamePic,
  coderPic,
  readingPic,
  walmartLogo,
  tmobileLogo,
} from "../../assets/aboutCollection";

function About() {
  return (
    <section id="about">
      <header className="aboutHeader">Meet the Developer</header>
      <hr className="aboutSectionDivider" />
      <div className="aboutContent">
        <div className="aboutDescription">
          <p>
            I'm a full stack developer with a strong foundation in both frontend
            and backend development. I grew up in Nepal and moved to the US
            right before highschool. Not counting coding, my interests include
            video games, reading light novels and soccer. Before college I used
            to hold little interest in the tech industry as a whole. However as
            I started college, I grew interested in coding and ended up with a
            bachelor's degree in Computer Science. Through that learning
            process, I grew passionate about software development and now I love
            seeing the impact of code I create - whether it's visible to the
            users or running behind the scenes.
          </p>
        </div>
        <div className="aboutImages">
          <div className="imageRow">
            <img src={soccerPic} alt="Soccer" className="aboutImage" />
            <img src={gamePic} alt="Gaming" className="aboutImage" />
          </div>
          <div className="imageRow">
            <img src={coderPic} alt="Coding" className="aboutImage" />
            <img src={readingPic} alt="Reading" className="aboutImage" />
          </div>
        </div>
      </div>
      <div className="aboutSkills">
        <h2>Technical Arsenal</h2>
        <ul className="languageLogos">
          <li data-title="C++">
            <img src={c_logo} alt="C++ logo" />
          </li>
          <li data-title="JavaScript">
            <img src={js_logo} alt="JavaScript logo" />
          </li>
          <li data-title="Java">
            <img src={java_logo} alt="Java logo" />
          </li>
          <li data-title="HTML">
            <img src={html_logo} alt="HTML logo" />
          </li>
          <li data-title="CSS">
            <img src={css_logo} alt="CSS logo" />
          </li>
          <li data-title="SQL">
            <img src={sql_logo} alt="SQL logo" />
          </li>
          <li data-title="Node.js">
            <img src={node_logo} alt="Node.js logo" />
          </li>
          <li data-title="React">
            <img src={react_logo} alt="React logo" />
          </li>
          <li data-title="Express.js">
            <img src={express_logo} alt="Express.js logo" />
          </li>
          <li data-title="Redux">
            <img src={redux_logo} alt="Redux logo" />
          </li>
        </ul>
      </div>
      <div className="aboutExperience">
        <h2>The Path So Far...</h2>
        <ul>
          <li className="experienceItem">
            <img
              src={walmartLogo}
              alt="Walmart logo"
              className="experienceLogo"
            />
            <div className="experienceDescription">
              <strong>Backend Developer | Walmart</strong>
              <p>
                At Walmart, I contribute to building scalable and
                high-performance backend systems that support millions of
                customers and streamline operations across various business
                units. Working within a fast-paced, agile environment, I
                collaborate with cross-functional teams to deliver innovative
                solutions that enhance Walmart's digital platforms.
              </p>
            </div>
          </li>
          <li className="experienceItem">
            <img
              src={tmobileLogo}
              alt="T-Mobile logo"
              className="experienceLogo"
            />
            <div className="experienceDescription">
              <strong>Full Stack Developer | T-Mobile</strong>
              <p>
                At T-Mobile, I work as a Full Stack Developer, playing a key
                role in delivering innovative digital solutions that enhance the
                customer experience and optimize internal systems. I collaborate
                closely with product managers, UX/UI designers, and DevOps teams
                to create seamless, responsive applications that drive business
                growth and customer satisfaction.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
