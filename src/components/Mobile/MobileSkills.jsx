import { useNavbar } from "../../context/NavbarContext";
import "./MobileSkills.css";
function MobileSkills() {
  const [showNavbar, setShowNavbar] = useNavbar();
  return (
    <div className="mobile-skills" onPointerDown={() => setShowNavbar(false)}>
      <h1>Skills</h1>
      <div className="skills">
        <h3>Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
        <h3>Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Laravel</li>
        </ul>
        <h3>Databases</h3>
        <ul>
          <li>MySQL</li>
          <li>Mongodb</li>
        </ul>
      </div>
    </div>
  );
}
export default MobileSkills;
