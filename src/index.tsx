import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import Dummy from "./components/dummy/dummy.component";
import ErrorPage from "./components/error-page/error-page.component";
import Movies from "./components/movies/movies.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dummy title="find a movie to watch tonight" /> },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
