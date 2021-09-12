import styles from "./TextBlock.module.css";

export function TextBlock({children}) {
    return (
        <p className={styles.textBlock}>{children}</p>
    )
}