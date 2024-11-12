import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TanstackProvider } from "./hoc/tanstack-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Created separate component to house tanstack config */}
    <TanstackProvider>
      <App />
    </TanstackProvider>
  </StrictMode>
);
