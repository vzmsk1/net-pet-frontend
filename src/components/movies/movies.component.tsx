import { useEffect, useState } from "react";
import type { IMovieProps } from "./movies.props";

const defaultMovies: IMovieProps[] | [] = [];

const Movies = () => {
  const [movies, setMovies] = useState(defaultMovies);

  useEffect(() => {
    const moviesList = [
      {
        id: 1,
        title: "Highlander",
        release_date: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description: "Description",
      },
      {
        id: 2,
        title: "Raiders of the Lost Ark",
        release_date: "1981-06-12",
        runtime: 115,
        mpaa_rating: "PG-13",
        description: "Description",
      },
    ];

    setMovies(moviesList);
  }, []);

  return <div></div>;
};

export default Movies;
