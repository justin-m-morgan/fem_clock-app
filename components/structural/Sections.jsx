import styles from "./Sections.module.css";

export function TopThird({ children }) {
  return <div className={styles.topthird__container}>{children}</div>;
}

export function MidThird({ children }) {
  return <div className={styles.midthird__container}>{children}</div>;
}

export function BottomThird({ children }) {
  return <div className={styles.bottomthird__container}>{children}</div>;
}
