import styles from "../input/input.module.css";
import type { ITextareaProps } from "./textarea.props";

const Textarea = ({ heading, name, placeholder }: ITextareaProps) => {
  return (
    <div className={styles.labelWrap}>
      <label className={styles.label}>
        <span className={styles.heading}>{heading}</span>
        <textarea
          className={styles.input}
          name={name}
          placeholder={placeholder}
        ></textarea>
      </label>
    </div>
  );
};

export default Textarea;
