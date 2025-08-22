import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// ✅ Fix: handle GitHub Pages 404 redirect
const redirect = new URLSearchParams(window.location.search).get("redirect");
if (redirect) {
  // ✅ Ensure the basename prefix is added back
  const base = "/portfolio";
  window.history.replaceState(null, "", base + redirect);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>
);
