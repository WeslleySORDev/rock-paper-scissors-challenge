import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const mainDiv = document.getElementById("root")!;
createRoot(mainDiv).render(
  <StrictMode>
    <App />
  </StrictMode>
);
