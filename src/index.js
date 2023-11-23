import React from 'react';
import { createRoot } from 'react-dom/client';
import "./styles.css";
import App from "./App";
import API from "./API";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <API />
  </React.StrictMode>
);

