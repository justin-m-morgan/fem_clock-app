import classnames from "classnames"
import { useState } from "react"
import styles from "./Greeting.module.css"

export default function Greeting(props) {
    const [timeOfDay, setTimeOfDay] = useState("morning")

    return (
        <div className={styles.container}>
            <img src="./assets/icons/icon-sun.svg" alt="Sun" />
            <h4 className={classnames(
                "h6",
                styles.text
            )}>{greeting(timeOfDay)}</h4>
        </div>
    )    
}

function greeting(timeOfDay) {
    return {
        morning: "Good Morning",
        evening: "Good Evening",
    }[timeOfDay] || "Good Day"
}