import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TheBackground from "./components/Backgrounds/TheBackground/TheBackground.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <TheBackground />
      <App />
  </StrictMode>
);
