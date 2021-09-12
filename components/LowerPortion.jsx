import styles from "./LowerPortion.module.css"

export function LowerPortion({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}