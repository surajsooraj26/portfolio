import "./App.css";
import Navbar from "./components/Desktop/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./components/Mobile/MobileNavbar";
import { NavbarProvider } from "./context/NavbarContext";
import Project from "./pages/Project";
function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <NavbarProvider>
        {isMobile ? <MobileNavbar /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </NavbarProvider>
    </>
  );
}

export default App;
