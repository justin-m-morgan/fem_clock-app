import classNames from "classnames";
import styles from "./Glassy.module.css";

export function Glassy({ children, isNight }) {
  return (
    <div
      className={classNames(styles.container, { [`${styles.night}`]: isNight })}
    >
      {children}
    </div>
  );
}
