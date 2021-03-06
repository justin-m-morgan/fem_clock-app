import classNames from "classnames";
import { parseDateString } from "../data/datetimes";
import styles from "./Time.module.css";
import IconMoon from "./svg/IconMoon";
import IconSun from "./svg/IconSun";

const dayIconUrl = "./assets/icons/icon-sun.svg";
const nightIconUrl = "./assets/icons/icon-moon.svg";

export default function TimeDisplay({
  datetime,
  abbreviation,
  city,
  region,
  isNight,
  toggleNightMode,
}) {
  return (
    <div className={styles.container}>
      <Greeting
        datetime={datetime}
        isNight={isNight}
        toggleNightMode={toggleNightMode(isNight)}
      />
      <Time datetime={datetime} abbreviation={abbreviation} />
      <Location city={city} region={region} />
    </div>
  );
}

function Time({ datetime, abbreviation }) {
  return (
    <time className={styles.timetext}>
      {formatTime(datetime)}
      <AbbreviatedTZ abbreviation={abbreviation} />
    </time>
  );
}

function AbbreviatedTZ({ abbreviation }) {
  return (
    <span className={classNames("h6", styles.timezone)}>
      {abbreviation || "---"}
    </span>
  );
}

function Greeting({ datetime, isNight, toggleNightMode }) {
  return (
    <div className={styles.greeting__container}>
      <button onClick={toggleNightMode} aria-label="Toggle Night Mode">
        {isNight ? <IconMoon /> : <IconSun />}
      </button>

      <h4 className={styles.greeting__text}>
        {greeting(datetime)}
        <span className={styles.greeting__text__hide}>, It's Currently</span>
      </h4>
    </div>
  );
}


function Location({ city, region }) {
  return (
    <div className={classNames("h4", styles.location__container)}>
      {locationDisplay(city, region)}
    </div>
  );
}

function locationDisplay(city, region) {
  return city ? `In ${city}, ${region}` : "Looking you up";
}

function formatTime(datetime) {
  let date = parseDateString(datetime);

  if (date instanceof Date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) minutes = `${minutes}`.padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return `--:--`;
}

function greeting(datetime) {
  let date = parseDateString(datetime);

  if (date instanceof Date) {
    let hour = date.getHours();
    if (hour < 12) return "Good Morning";
    else if (hour >= 12 && hour <= 18) return "Good Afternoon";
    else if (hour >= 18) return "Good Eventing";
  }

  return "Good Day";
}
