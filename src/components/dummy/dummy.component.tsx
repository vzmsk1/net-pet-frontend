import styles from "./dummy.module.css";
import type { IDummyProps } from "./dummy.props";

const Dummy = ({ title }: IDummyProps) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
};

export default Dummy;
