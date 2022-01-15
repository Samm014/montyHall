import styles from '../styles/NumericEntry.module.css';

interface NumericEntryProps{
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function NumericEntry(props){

    const inc = () => props.onChange(props.value + 1);
    const dec = () => props.onChange(props.value - 1);

    return (
        <div className={styles.numericEntry}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttons}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}