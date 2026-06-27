import { useNavbar } from "../../context/NavbarContext";
function MobileSkills() {
  const [showNavbar, setShowNavbar] = useNavbar();
  return (
    <div className="mobile-skills" onPointerDown={() => setShowNavbar(false)}>
      <h1>Skills</h1>
    </div>
  );
}
export default MobileSkills;
