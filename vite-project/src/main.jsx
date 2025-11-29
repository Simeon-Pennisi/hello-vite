import { StrictMode } from "react";
import { ReactDOM } from "react-dom/client"; // never used
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

// createRoot(document.getElementById("root")).render(
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
