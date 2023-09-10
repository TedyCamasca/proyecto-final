import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/base/normalize.css";
import "./styles/base/global.css";
import "./styles/base/variables.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
