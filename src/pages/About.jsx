import MobileAbout from "../components/Mobile/MobileAbout";
import DesktopAbout from "../components/Desktop/DesktopAbout";
import { useMediaQuery } from "react-responsive";
function About() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <>{isMobile ? <MobileAbout /> : <DesktopAbout />}</>;
}
export default About;
