import type { IInputProps } from "./input.props";
import styles from "./input.module.css";

const Input = ({
  heading,
  type,
  name,
  ref,
  placeholder,
  onChange,
  autoComplete,
  value,
  errorMsg,
}: IInputProps) => {
  return (
    <div className={styles.labelWrap}>
      <label className={styles.label}>
        <span className={styles.heading}>{heading}</span>
        <input
          className={styles.input}
          type={type}
          id={name}
          ref={ref}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autoComplete}
          value={value}
        />
      </label>
      <span className={styles.error}>{errorMsg}</span>
    </div>
  );
};

export default Input;
