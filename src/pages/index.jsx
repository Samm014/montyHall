import Card from "../components/Card";
import styles from "../styles/Form.module.css"
import Link from 'next/link';
import NumericEntry from "../components/NumericEntry";
import { useState } from 'react'

export default function Form() {

  const [countDoors,setCountDoors] = useState(3);
  const [hasGift,setHasGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
        <NumericEntry value={countDoors} text="Quantidade de Portas?" onChange={newCount => setCountDoors(newCount)}/>
        </Card>
      </div>
       
      <div>
        <Card>
        <NumericEntry value={hasGift} text="Porta com presente?" onChange={newGift => setHasGift(newGift)}/>
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${countDoors}/${hasGift}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
