import Door from '../../../components/Door';
import { useEffect, useState } from "react";
import styles from '../../../styles/Game.module.css'
import { createDoors, updateDoors } from "../../../../functions/doors";
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Game(){

    const router = useRouter();
    const [valid, setValid] = useState(false)
    const [doors, setDoors] = useState([])

    useEffect(()=>{
        const countDoors = +router.query.doors;
        const doorWithGift = +router.query.hasGift;
        
        const countValidDoors = countDoors >= 3 && countDoors <= 100;
        const hasValidGift = doorWithGift >= 1 && doorWithGift <= countDoors;

        setValid(countValidDoors && hasValidGift)
    },[doors, router.query.doors, router.query.hasGift])


    useEffect(()=>{
        const countDoors = +router.query.doors;
        const doorWithGift = +router.query.hasGift;
        setDoors(createDoors(countDoors, doorWithGift));
    },[router?.query])

    
  

    const renderDoors = ()=>{
        return doors.map(door => {
          return <Door key={door.number} value={door} 
          onChange={newDoor => {
            setDoors(updateDoors(doors, newDoor));
          }}/>
        })
      }

    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {valid ? 
                renderDoors() :
                <h2 style={{color:"#fff",alignSelf:'flex-end'}}>Valores Inválidos</h2>}
            </div>
            <div className={styles.buttons}>
                <Link href="/" passHref>
                    <button>Reniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}