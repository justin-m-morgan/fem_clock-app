import classNames from "classnames"
import styles from "./MoreButton.module.css"



export default function MoreButton({
  morePanelShowing,
  toggleMorePanelShowing,
}) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => toggleMorePanelShowing(morePanelShowing)()}
        className={styles.button}
      >
        <span
          className={classNames(styles.text, {
            [`${styles.text__hide}`]: morePanelShowing,
          })}
        >
          More
        </span>
        <span
          className={classNames(styles.text, {
            [`${styles.text__hide}`]: !morePanelShowing,
          })}
        >
          Less
        </span>

        <img
          src="./assets/icons/icon-arrow-up.svg"
          alt="Arrow Icon"
          className={classNames({
            [`${styles.rotate_half}`]: morePanelShowing,
          })}
        />
      </button>
    </div>
  );
}

function toggleText(moreShowing) {
  return moreShowing ? "Less" : "More";
}
