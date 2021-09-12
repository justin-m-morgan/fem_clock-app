import classNames from "classnames"
import { useState } from "react"
import styles from "./Location.module.css"

export default function Location(props) {
    const [location, setLocation] = useState(false)
    return (
        <div className={classNames(
            "h4",
            styles.container
        )}>
            {locationDisplay(location)}
        </div>
    )  
}

function locationDisplay(location) {
    return location ? `In ${location}` : "Looking you up"
}