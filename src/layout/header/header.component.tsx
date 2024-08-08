import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Button from "../../components/button/button.component";
import styles from "./header.module.css";
import type { IHeaderProps } from "./header.props";

export const Header = ({ title }: IHeaderProps) => {
  const { jwtToken } = useOutletContext<any>();
  const { setJwtToken } = useOutletContext<any>();

  const navigate = useNavigate();

  const logout = () => {
    if (jwtToken) {
      setJwtToken("");
      navigate("/login");
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        {title}
      </Link>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          home
        </Link>
        <Link to="/movies" className={styles.navLink}>
          movies
        </Link>
        <Link to="/genres" className={styles.navLink}>
          genres
        </Link>
        {jwtToken && (
          <>
            <Link to="/admin/movie/0" className={styles.navLink}>
              add movie
            </Link>
            <Link to="/admin" className={styles.navLink}>
              catalogue
            </Link>{" "}
            <Link to="/graphql" className={styles.navLink}>
              graphQL
            </Link>
          </>
        )}
      </nav>

      <Button onClick={logout} link="/login">
        {jwtToken ? "logout" : "login"}
      </Button>
    </header>
  );
};
