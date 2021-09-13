import { TextBlock } from "./ui/TextBlock";
import styles from "./Quote.module.css";

export default function Quote({ quoteData, refetch }) {
  return (
    <div className={styles.quote}>
      {ifAllAccessedPropsPresent(quoteData) ? (
        <div className={styles.quote__container}>
          <div className={styles.quote__text}>
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
  return <TextBlock>"{textContent}"</TextBlock>;
}

function QuoteAuthor({ textContent }) {
  return <h3 className="h5">{textContent}</h3>;
}

function CycleQuotesButton({ refetch }) {
  return (
    <button onClick={refetch} className={styles.quote__refreshbutton}>
      <img src="/assets/icons/icon-refresh.svg" alt="Refresh" />
    </button>
  );
}

function QuoteDataMissing(props) {
  return <div className={styles.quote__container}></div>;
}
