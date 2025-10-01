import DesktopProject from "../components/Desktop/DesktopProject";
import MobileProject from "../components/Mobile/MobileProject";
import { useMediaQuery } from "react-responsive";
function Project() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <>{isMobile ? <MobileProject /> : <DesktopProject />}</>;
}
export default Project;
