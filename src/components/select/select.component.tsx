import styles from "../input/input.module.css";
import type { ISelectProps } from "./select.props";

const Select = ({
  heading,
  name,
  value,
  onChange,
  placeholder,
  options,
  errorMsg,
}: ISelectProps) => {
  return (
    <div className={styles.labelWrap}>
      <label className={styles.label}>
        <span className={styles.heading}>{heading}</span>
        <select
          className={styles.select}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.value}
              </option>
            );
          })}
        </select>
      </label>
      <span className={styles.error}>{errorMsg}</span>
    </div>
  );
};

export default Select;
