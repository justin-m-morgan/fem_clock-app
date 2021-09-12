import classNames from "classnames"
import styles from "./Location.module.css"

export default function Location({city, region_code}) {
    
    return (
        <div className={classNames(
            "h4",
            styles.container
        )}>
            {locationDisplay(city, region_code)}
        </div>
    )  
}

function locationDisplay(city, region_code) {
    return city ? `In ${city}, ${region_code}` : "Looking you up"
}