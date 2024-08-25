import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { withLayout } from "../../layout/layout.component";
import type { IMovieProps } from "../movies/movies.props";
import Title from "../../components/title/title.component";
import styles from "./movie.module.css";

const defaultMovie: IMovieProps | {} = {};

const Movie = () => {
  const [movie, setMovie] = useState(defaultMovie);
  const { id } = useParams();

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(`/movies/${id}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const m = movie as IMovieProps;

  if (m.genres) {
    m.genres = Object.values(m.genres);
  } else {
    m.genres = [];
  }

  return (
    <section className="section">
      <Title tag="h2">Movie: {m.title}</Title>
      <div className={styles.info}>
        <span className={styles.text}>{m.release_date}</span>
        {m.genres.map((g: { id: number; genre: string }) => {
          return <span key={g.genre}>{g.genre}</span>;
        })}

        {m.image !== "" && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${m.image}`}
              alt="poster"
            />
          </div>
        )}
        <p className={styles.text}>{m.description}</p>
      </div>
    </section>
  );
};

export default withLayout(Movie);
