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
    const m: IMovieProps = {
      id: 1,
      title: "Highlander",
      release_date: "1986-03-07",
      runtime: 116,
      mpaa_rating: "R",
      description: "Description",
    };

    setMovie(m);
  }, [id]);

  const m = movie as IMovieProps;

  return (
    <section className="section">
      <Title tag="h2">Movie: {m.title}</Title>
      <div className={styles.info}>
        <span className={styles.text}>{m.release_date}</span>
        <p className={styles.text}>{m.description}</p>
      </div>
    </section>
  );
};

export default withLayout(Movie);
