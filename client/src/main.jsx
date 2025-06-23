import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { appStore } from "./app/store.js";
import { Toaster } from "./components/ui/sonner.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <Toaster />
      <App />
    </Provider>
  </StrictMode>
);
