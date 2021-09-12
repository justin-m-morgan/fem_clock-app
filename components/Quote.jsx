import { useEffect, useState } from "react";
import quotes from "../api/quotes";
import { TextBlock } from "./ui/TextBlock";
import styles from "./Quote.module.css";

export default function Quote(props) {
    const [quote, setQuote] = useState(null)
    useEffect(() => {
        fetch(quotes.random)
            .then(res => res.json())
            .then(quote => setQuote(quote))
    }, [])

    return (
        <div className={styles.quote}>

            {quote &&
                <div className={styles.quote__container}>
                    <div className={styles.quote__text}>
                    <TextBlock>
                        "{quote.content}"
                    </TextBlock>
                    <h3 className="h5">{quote.author}</h3>                    
                    </div>
                    <img src="/assets/icons/icon-refresh.svg" alt="Refresh"/>
                </div>
            }
        </div>
    )
}