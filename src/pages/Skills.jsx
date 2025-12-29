import { useMediaQuery } from "react-responsive";
import DesktopSkills from "../components/Desktop/DesktopSkills";
import MobileSkills from "../components/Mobile/MobileSkills";

function Skills() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <>{isMobile ? <MobileSkills /> : <DesktopSkills />}</>;
}

export default Skills;
