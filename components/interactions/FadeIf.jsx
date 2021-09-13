import classNames from "classnames";

import styles from "./FadeIf.module.css"

export default function FadeIf({children, predicate}) {
    return (
    <div className={classNames(
        styles.base,
        {[`${styles.fade}`]: predicate}
    )}>
        {children}
    </div>
    )
}