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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "body/:bodyId",
        element: <Body />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <RouterProvider router={router} />
      <App />
    </React.StrictMode>
  </div>
);
