import projectdata from "./../../data/project.json";
import "./MobileProject.css";
import { useNavbar } from "../../context/NavbarContext";
function MobileProject() {
  const [showNavbar, setShowNavbar] = useNavbar();
  return (
    <div className="mobile-projects" onPointerDown={() => setShowNavbar(false)}>
      <h1>Projects</h1>
      <p className="section_2_para">
        A selection of projects I've worked on, showcasing my skills and
        experience.
      </p>

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

          <div className="m2">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default MobileProject;
