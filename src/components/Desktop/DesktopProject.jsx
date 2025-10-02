import projectdata from "./../../data/project.json";
import "./DesktopProject.css";
function DesktopProject() {
  return (
    <div className="home">
      <div className="section_2">
        <h1>Projects</h1>
        <p className="section_2_para">
          A selection of projects I've worked on, showcasing my skills and
          experience.
        </p>
        <div className="project-list">
          {projectdata.map((project, index) => (
            <div className="project" key={index}>
              <div className="project2">
                <h3>{project.title}</h3>
                <p className="section_2_para">{project.description}</p>
                <button
                  className="view-project-button"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project
                </button>
              </div>
              <div className="project3">
                <img src={project.image} loading="lazy" alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DesktopProject;
