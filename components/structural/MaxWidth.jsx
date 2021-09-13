import styles from "./MaxWidth.module.css";

export default function MaxWidth({ children }) {
  return <div className={styles.container}>{children}</div>;
}
