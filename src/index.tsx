import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import EditMovie from "./components/edit-movie/edit-movie.component";
import ErrorPage from "./components/error-page/error-page.component";
import Catalogue from "./routes/catalogue/catalogue.component";
import Movie from "./routes/movie/movie.component";
import Movies from "./routes/movies/movies.component";
import Home from "./routes/home/home.component";
import Login from "./routes/login/login.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Catalogue />,
      },
      {
        path: "/admin/movie/:id",
        element: <EditMovie />,
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
