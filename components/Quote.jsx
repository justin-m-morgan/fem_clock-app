import styles from "./Quote.module.css";
import IconRefresh from "./svg/IconRefresh";

export default function Quote({ quoteData, refetch }) {
  return (
    <div className={styles.quote}>
      {ifAllAccessedPropsPresent(quoteData) ? (
        <div className={styles.quote__container}>
          <div>
            <QuoteText textContent={quoteData.content} />
            <QuoteAuthor textContent={quoteData.author} />
          </div>
          <CycleQuotesButton refetch={refetch} />
        </div>
      ) : (
        <QuoteDataMissing />
      )}
    </div>
  );
}

function ifAllAccessedPropsPresent(quoteData) {
  return quoteData && quoteData.content && quoteData.author;
}

function QuoteText({ textContent }) {
  return <p className={styles.quote__text}>"{textContent}"</p>;
}

function QuoteAuthor({ textContent }) {
  return <h3 className={styles.quote__author}>{textContent}</h3>;
}

function CycleQuotesButton({ refetch }) {
  return (
    <button
      onClick={refetch}
      className={styles.quote__refreshbutton}
      aria-label="Cycle quote"
    >
      <IconRefresh />
      {/* <img src="/assets/icons/icon-refresh.svg" alt="Refresh" /> */}
    </button>
  );
}

function QuoteDataMissing(props) {
  return <div className={styles.quote__container}></div>;
}
