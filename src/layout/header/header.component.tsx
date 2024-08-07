import styles from "./header.module.css";
import cn from "classnames";
import type { IHeaderProps } from "./header.props";

export const Header = ({ title }: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>{title}</span>
      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>
          home
        </a>
        <a href="#" className={styles.navLink}>
          movies
        </a>
        <a href="#" className={styles.navLink}>
          genres
        </a>
        <a href="#" className={styles.navLink}>
          add movie
        </a>
        <a href="#" className={styles.navLink}>
          catalogue
        </a>{" "}
        <a href="#" className={styles.navLink}>
          graphQL
        </a>
      </nav>
      <a href="#" className={styles.link}>
        login
      </a>
    </header>
  );
};
