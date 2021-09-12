import classnames from "classnames"
import { parseDateString } from "../data/datetimes"
import styles from "./Greeting.module.css"

export default function Greeting({datetime}) {
    

    return (
        <div className={styles.container}>
            <img src="./assets/icons/icon-sun.svg" alt="Sun" />
            <h4 className={classnames(
                "h6",
                styles.text
            )}>{greeting(datetime)}</h4>
        </div>
    )    
}

function greeting(datetime) {
    let date = parseDateString(datetime)

    if (date instanceof Date) {
        let hour = date.getHours()
        if (hour < 12) return "Good Morning"
        else if (hour >= 12 && hour <=18) return "Good Afternoon"
        else if (hour >= 18 ) return "Good Eventing"
    }
    
    return "Good Day"
    
}