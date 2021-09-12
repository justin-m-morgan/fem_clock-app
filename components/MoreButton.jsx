import styles from "./MoreButton.module.css"

export default function MoreButton(props) {
    return (
        <div className={styles.container}>
        <button className={styles.button}>
            <span className={styles.text}>More</span>
            <img src="./assets/icons/icon-arrow-up.svg" alt="Arrow Icon" />
        </button>
        </div>
    )  
}