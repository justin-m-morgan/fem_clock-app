import styles from "./PrimaryPanel.module.css";

export default function PrimaryPanel(props) {
  return <div className={styles.container}>{props.children}</div>;
}
