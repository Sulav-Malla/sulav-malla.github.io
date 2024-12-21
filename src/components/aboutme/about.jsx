import "./about.css";

function About() {
  return (
    <section id="about">
      <header className="aboutHeader">About Me</header>
      <div className="aboutDescription">
        <p>
          I'm a full stack developer with a strong foundation in both frontend
          and backend development. I grew up in Nepal and moved to the US right
          before highschool. Not counting coding, my interests include video
          games, reading light novels and soccer. Before college I used to hold
          little interest in the tech industry as a whole. However as I started
          college, I grew interested in coding and ended up with a bachelor's
          degree in COmputer Science. Through that learning process, I grew
          passionate about software development and now I love seeing the impact
          of code I create - wheth it's visible to the users or running behind
          the scenes.
        </p>
      </div>
      <div className="aboutSkills">
        <h2>Skills</h2>
        <ul>
          <li>C++, Python, JavaScript, Java</li>
          <li>React, Node.js</li>
        </ul>
      </div>
      <div className="aboutExperience">
        <h2>Experience</h2>
        <ul>
          <li>Software Developer Intern at XYZ Company</li>
          <li>Full Stack Developer at ABC Company</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
