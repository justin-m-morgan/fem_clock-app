import styles from "./Glassy.module.css";

export function Glassy({ children }) {
  return <div className={styles.container}>{children}</div>;
}
