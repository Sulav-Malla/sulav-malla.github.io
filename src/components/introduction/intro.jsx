import "./intro.css";
import personalPic from "../../assets/intro_img.png";
import { useEffect, useState } from "react";

function Intro() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const navPosition = nav.getBoundingClientRect().bottom;
      setShowNavBar(navPosition < 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="home">
      <header>
        <div className="introContainer">
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </nav>
          <div className="intro">
            <div className="left">
              <p>Hi! My name is</p>
              <h1>Sulav Malla</h1>
            </div>
            <div className="picture">
              <img src={personalPic}></img>
            </div>
            <div className="right">
              <p>
                I'm a Full Stack Software Developer. <br></br> I specialize in
                both front-end and back-end development, <br></br>creating
                intuitive and efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </header>
      {showNavBar && (
        <div className="fixedNavBar">
          <div className="menu-icon" onClick={toggleMenu}>
            {showMenu ? "✖" : "☰"}
          </div>
          <ul style={{ display: showMenu ? "flex" : "none" }}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Intro;
