import styles from "./section.module.css";
import type { ISectionProps } from "./section.props";

const Section = ({ children }: ISectionProps) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
