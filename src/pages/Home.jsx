import "./Home.css";
import { useMediaQuery } from "react-responsive";
import DesktopHome from "../components/Desktop/DesktopHome";
import MobileHome from "../components/Mobile/MobileHome";

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return <>{isMobile ? <MobileHome /> : <DesktopHome />}</>;
}
export default Home;
