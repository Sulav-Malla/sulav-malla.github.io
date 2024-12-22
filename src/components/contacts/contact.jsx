import "./contact.css";
import { useState } from "react";
import linkedinIcon from "../../assets/linkedin_logo.png";
import githubIcon from "../../assets/github_logo.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:smalla1310@gmail.com?subject=Message from ${name}&body=${message} (${email})`;
  };

  const isEmailValid = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const isFormValid = name && isEmailValid && message;

  return (
    <section id="contact">
      <div className="contactContent">
        <div className="contactLeft">
          <header className="contactHeader">Contact Me</header>
          <p className="contactDescription">
            Feel free to message me. I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="contactFormContainer">
          <form onSubmit={handleSubmit} className="contactForm">
            <label>
              Name: <span className="required">*</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email: <span className="required">*</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {!isEmailValid && email && (
                <span className="error">
                  Please enter a valid email address.
                </span>
              )}
            </label>
            <label>
              Message: <span className="required">*</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            <button
              type="submit"
              className="contactButton"
              disabled={!isFormValid}
            >
              Message Me
            </button>
          </form>
        </div>
      </div>
      <div className="contactPrompt">
        <p>Connect On: </p>
      </div>
      <div className="contactIcons">
        <a
          href="https://www.linkedin.com/in/sulavmalla/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/Sulav-Malla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
