import { Link } from "react-router-dom";
import type { IButtonProps } from "./button.props";
import styles from "./button.module.css";

const Button = ({ link, children }: IButtonProps) => {
  return link ? (
    <Link to={link} className={styles.button}>
      {children}
    </Link>
  ) : (
    <button className={styles.button}>{children}</button>
  );
};

export default Button;
