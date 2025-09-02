import "./MobileHome.css";
import projectdata from "./../../data/project.json";
function MobileHome() {
  return (
    <div className="mobile-home">
      <div className="intro">
        <h1>Hi, I'm Suraj!</h1>
        <p>
          A passionate web developer with a focus on creating innovative and
          user-friendly applications. With a background in computer science and
          a love for problem-solving, I enjoy building solutions that make a
          difference. My expertise spans various technologies, and I'm always
          eager to learn and adapt to new challenges.
        </p>
      </div>
      <div className="profile">
        <img src="profile.jpg" loading="lazy" alt="Profile" />
        <h1>Suraj S</h1>
        <p>Web Developer</p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        {projectdata.map((projectData, index) => (
          <div
            key={index}
            className="projects-list"
            onClick={() => window.open(projectData.link, "_blank")}
          >
            <div className="details">
              <p className="title">{projectData.title}</p>
              <p className="description">{projectData.description}</p>
            </div>
            <div className="img">
              <img
                src={projectData.image}
                loading="lazy"
                alt={projectData.title}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="contact">
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
export default MobileHome;
