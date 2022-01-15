import styles from '../styles/Card.module.css';

interface cardProps {
    bgColor?: string,
    children?: string,
}

export default function Card(props: cardProps){
    return (
        <div className={styles.card} 
        style={{backgroundColor: props.bgColor ?? "#fff"}}>
            
        {props.children}
        </div>
    )
}