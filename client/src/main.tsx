import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IdeaProvider } from "./context/ideaContext.tsx";
import { AuthProvider } from "./context/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <IdeaProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </IdeaProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
