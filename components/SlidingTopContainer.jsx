import styles from "./SlidingTopContainer.module.css"

export default function SlidingTopContainer(props) {
    return (
        <div className={styles.container}>{props.children}</div>
    )
}