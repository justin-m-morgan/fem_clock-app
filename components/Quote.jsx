import { TextBlock } from "./ui/TextBlock";
import styles from "./Quote.module.css";

export default function Quote({quoteData, refetch}) {

    return (
        <div className={styles.quote}>

            {quoteData &&
                <div className={styles.quote__container}>
                    <div className={styles.quote__text}>
                    <TextBlock>
                        "{quoteData?.content}"
                    </TextBlock>
                    <h3 className="h5">{quoteData?.author}</h3>                    
                    </div>
                    <button onClick={refetch} className={styles.quote__refreshbutton}>
                        <img src="/assets/icons/icon-refresh.svg" alt="Refresh"/>
                    </button>
                </div>
            }
        </div>
    )
}