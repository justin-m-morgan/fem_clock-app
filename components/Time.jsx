import classNames from "classnames"
import { parseDateString } from "../data/datetimes"
import styles from "./Time.module.css"

export default function Time({datetime, abbreviation}) {
    return (
        <time className={classNames(
            "h1",
            styles.time
        )}>
            {formatTime(datetime)}
            <span className={classNames(
                "h6",
                styles.timezone
            )}>{abbreviation || ""}</span>
        </time>
    )  
}

function formatTime(datetime) {
    let date = parseDateString(datetime)
    let hours = date.getHours()
    let minutes = date.getMinutes() == 0 ? "00" : date.getMinutes() 

    if (date instanceof Date) {
        return `${hours}:${minutes}`
    }
    return `12:00`
}
