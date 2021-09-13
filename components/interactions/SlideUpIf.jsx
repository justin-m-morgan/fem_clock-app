import classNames from "classnames";

import styles from "./SlideUpIf.module.css"

export default function FadeIf({children, predicate}) {
    return (
    <div className={classNames(
        styles.base,
        {[`${styles.slide}`]: predicate}
    )}>
        {children}
    </div>
    )
}