import styles from '../styles/Gift.module.css'
export default function Gift(){
    return(
        <div className={styles.gift}>
            <div className={styles.cover}></div>
            <div className={styles.giftBody}></div>
            <div className={styles.loop1}></div>
            <div className={styles.loop2}></div>
        </div>
    )
}