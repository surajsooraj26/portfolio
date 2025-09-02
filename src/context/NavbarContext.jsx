import { createContext, useContext, useState } from "react";
const NavbarContext = createContext();

function NavbarProvider({ children }) {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <NavbarContext.Provider value={[showNavbar, setShowNavbar]}>
      {children}
    </NavbarContext.Provider>
  );
}

function useNavbar() {
  return useContext(NavbarContext);
}
export { NavbarProvider, useNavbar };
