import styles from "./Background.module.css";

export function Background({children}) {
    return (
        <div className={styles.background}>
            <div className={styles.background__container}>
            {children}
            </div>
        </div>
    )
}