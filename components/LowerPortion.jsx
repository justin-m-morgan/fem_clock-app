import styles from "./LowerPortion.module.css"

export default function LowerPortion({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}