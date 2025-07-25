import "./App.css";
import Navbar from "./components/Desktop/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./components/Mobile/MobileNavbar";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
