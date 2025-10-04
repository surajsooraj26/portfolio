import "./DesktopHome.css";
import { useState } from "react";
import projectdata from "./../../data/project.json";
import emailjs from "emailjs-com";

function DesktopHome() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    console.log("reach");
    e.preventDefault();
    emailjs
      .send(
        "service_d68foc6",
        "template_ch92v7g",
        {
          from_email: formData.email,
          message: formData.message,
        },
        "gaz7InjeZVvwuQpKh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="home">
      <div className="section_1">
        <div className="profile">
          <img src="profile.jpg" loading="lazy" alt="Profile" />
        </div>
        <div className="intro">
          <h1>Hi, I'm Suraj, a Web Developer</h1>
          <p>
            I'm a web developer with a on creating innovative and efficient
            solutions. Explore my portfolio to see my work and skills.
          </p>
          <button className="contact_button">View Projects</button>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project_list">
          {projectdata.slice(0, 3).map((project, index) => (
            <div
              className="project"
              key={index}
              onClick={() => window.open(project.link, "_blank")}
            >
              <img src={project.image} loading="lazy" alt={project.title} />
              <h3>{project.title}</h3>
              <p className="section_2_para">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>PHP</li>
          <li>Git</li>
          <li>React</li>
          <li>CSS</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <form action="" className="contact_form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Your email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" onClick={sendEmail}>
            Send
          </button>
        </form>
        {status && <p className="mt-2">{status}</p>}
      </div>
    </div>
  );
}

export default DesktopHome;
