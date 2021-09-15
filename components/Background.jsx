import classNames from "classnames";
import styles from "./Background.module.css";

export default function Background({ children, isNight }) {
  return <div className={styles.background}>{children}</div>;
}
