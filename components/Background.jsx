import classNames from "classnames";
import styles from "./Background.module.css";

export default function Background({ children, isNight }) {
  return (
    <div
      className={classNames(styles.background, {
        [`${styles.night}`]: isNight,
      })}
    >
      {children}
    </div>
  );
}
