import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Title from "../../components/title/title.component";
import { withLayout } from "../../layout/layout.component";
import styles from "../movies/movies.module.css";
import type { IMovieProps } from "../movies/movies.props";

const defaultMovies: IMovieProps[] | [] = [];

const Catalogue = () => {
  const [movies, setMovies] = useState(defaultMovies);
  const { jwtToken } = useOutletContext<any>();
  const navigate = useNavigate();

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/login");
      return;
    }

    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + jwtToken);

    const requestOptions = {
      method: "GET",
      headers,
    };

    fetch("/admin/movies", requestOptions)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => {
        console.log(err);
      });
  }, [jwtToken, navigate]);

  return (
    <section className="section">
      <Title tag="h2">catalogue</Title>
      <div className={styles.table}>
        <div className={styles.row}>
          <span className={styles.heading}>movie</span>
          <span className={styles.heading}>release date</span>
          <span className={styles.heading}>rating</span>
        </div>
        <div className={styles.table}>
          {movies.map((m) => (
            <div key={m.id} className={styles.row}>
              <Link to={`/admin/movies/${m.id}`} className={styles.text}>
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

export default withLayout(Catalogue);
