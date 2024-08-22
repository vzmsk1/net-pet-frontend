import type { IInputProps } from "../input/input.props";
import styles from "./checkbox.module.css";

const Checkbox = ({ name, value, onChange, checked, title }: IInputProps) => {
  return (
    <div className={styles.wrap}>
      <input
        id={name}
        type="checkbox"
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
        className={styles.input}
      />
      <label className={styles.label}>{title}</label>l
    </div>
  );
};

export default Checkbox;
