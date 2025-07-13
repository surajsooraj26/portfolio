import "./DesktopHome.css";
import projectdata from "./../../data/project.json";
function DesktopHome() {
  return (
    <div className="home">
      <div className="section_1">
        <div className="profile">
          <img src="IMG_3113.JPG" loading="lazy" alt="Profile" />
        </div>
        <div className="intro">
          <h1>Hi, I'm Suraj, a Web Developer</h1>
          <p>
            I'm a web developer with a focus on creating innovative and
            efficient solutions. Explore my portfolio to see my work and skills.
          </p>
          <button className="contact_button">View Projects</button>
        </div>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project_list">
          {projectdata.slice(0, 3).map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} loading="lazy" alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
          <input type="email" placeholder="Your email" required />
          <label htmlFor="message">Message</label>
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default DesktopHome;
