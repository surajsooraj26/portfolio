import projectdata from "./../../data/project.json";
import "./MobileProject.css";
function MobileProject() {
  return (
    <div className="mobile-projects">
      <h1>Projects</h1>

      {projectdata.map((project) => (
        <div className="mobile-project-list">
          <div className="mobile-project" key={project.id}>
            <h3 className="m-p-title">{project.title}</h3>
            <p className="section_2_para">{project.description}</p>
            <button className="view-project-button">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </button>
          </div>

          <div className="m2"></div>
        </div>
      ))}
    </div>
  );
}
export default MobileProject;
