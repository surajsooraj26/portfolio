import { useNavbar } from "../../context/NavbarContext";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaPython, FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";

import "./MobileSkills.css";
function MobileSkills() {
  const [showNavbar, setShowNavbar] = useNavbar();
  return (
    <div className="mobile-skills" onPointerDown={() => setShowNavbar(false)}>
      <h1>Skills</h1>
      <div className="skills">
        <h3>Languages</h3>
        <ul>
          <li className="list-icon">
            <IoLogoJavascript color="#61dafb" />
            JavaScript
          </li>
          <li className="list-icon">
            <FaJava color="#61dafb" />
            Java
          </li>
          <li className="list-icon">
            <FaPython color="#61dafb" />
            Python
          </li>
          <li className="list-icon">
            <PiFileCpp color="#61dafb" />
            C++
          </li>
        </ul>
        <h3>Frameworks</h3>
        <ul>
          <li className="list-icon">
            <FaReact color="#61dafb" />
            React
          </li>
          <li className="list-icon">
            <FaNodeJs color="#61dafb" />
            Node.js
          </li>
          <li className="list-icon">
            <SiExpress color="#61dafb" />
            Express.js
          </li>
          <li className="list-icon">
            <FaLaravel color="#61dafb" />
            Laravel
          </li>
        </ul>
        <h3>Databases</h3>
        <ul>
          <li className="list-icon">
            <SiMysql color="#61dafb" />
            MySQL
          </li>
          <li className="list-icon">
            <SiMongodb color="#61dafb" />
            Mongodb
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MobileSkills;
