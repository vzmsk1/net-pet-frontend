import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import styles from "./header.module.css";
import type { IHeaderProps } from "./header.props";

export const Header = ({ title }: IHeaderProps) => {
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
        <Link to="/admin/movie/0" className={styles.navLink}>
          add movie
        </Link>
        <Link to="/admin" className={styles.navLink}>
          catalogue
        </Link>{" "}
        <Link to="/graphql" className={styles.navLink}>
          graphQL
        </Link>
      </nav>
      <Button link="/login">login</Button>
    </header>
  );
};
