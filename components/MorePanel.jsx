import classNames from "classnames";
import styles from "./MorePanel.module.css";

export default function MorePanel({
  timezone,
  day_of_year,
  day_of_week,
  week_number,
  isNight,
}) {
  return (
    <div
      className={classNames(styles.container, { [`${styles.night}`]: isNight })}
    >
      <dl className={styles.datalist}>
        <div className={styles.datalist__itemcontainer}>
          <dt>Current Timezone</dt>
          <dd>{timezone || "---"} </dd>
        </div>
        <div className={styles.datalist__itemcontainer}>
          <dt>Day of Year</dt>
          <dd>{day_of_year || "--"}</dd>
        </div>
        <div className={styles.datalist__itemcontainer}>
          <dt>Day of Week</dt>
          <dd>{day_of_week || "--"}</dd>
        </div>
        <div className={styles.datalist__itemcontainer}>
          <dt>Week Number</dt>
          <dd>{week_number || "--"}</dd>
        </div>
      </dl>
    </div>
  );
}
