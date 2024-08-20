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
    const headers = new Headers()
    
    headers.append("Content-Type", "application/json")
    
    const requestOptions = {
      method: 'GET',
      headers
    }
    
    fetch("http://localhost:8080/movies", requestOptions)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => {
        console.log(err)
      })
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
