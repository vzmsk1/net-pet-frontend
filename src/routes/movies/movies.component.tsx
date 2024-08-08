import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/title/title.component";
import { withLayout } from "../../layout/layout.component";
import styles from "./movies.module.css";
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

  return (
    <section className="section">
      <Title tag="h2">movies</Title>
      <div className={styles.table}>
        <div className={styles.row}>
          <span className={styles.heading}>movie</span>
          <span className={styles.heading}>release date</span>
          <span className={styles.heading}>rating</span>
        </div>
        <div className={styles.table}>
          {movies.map((m) => (
            <div key={m.id} className={styles.row}>
              <Link to={`/movies/${m.id}`} className={styles.text}>
                {m.title}
              </Link>
              <span className={styles.text}>{m.release_date}</span>
              <span className={styles.text}>{m.mpaa_rating}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withLayout(Movies);
