import { useMediaQuery } from "react-responsive";
import DesktopContact from "../components/Desktop/DesktopContact";
import MobileContact from "../components/Mobile/MobileContact";
function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <>{isMobile ? <MobileContact /> : <DesktopContact />}</>;
}
export default Contact;
