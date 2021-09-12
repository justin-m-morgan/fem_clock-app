import classNames from "classnames"
import styles from "./Time.module.css"

export default function Time(props) {
    return (
        <time className={classNames(
            "h1",
            styles.time
        )}>
            11:45
            <span className={classNames(
                "h6",
                styles.timezone
            )}>BST</span>
        </time>
    )  
}