import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Router,
} from "react-router-dom";
import { Body } from "./pages/Body.jsx";
import ErrorPage from "./pages/error-page.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);