import { BiBulb } from "react-icons/bi";
import styles from './styles.module.css'

export default function Logo() {
  return (
    <div className={styles.container}>
      <BiBulb size={30} color={'#8C70FF'} /> <h1 className={styles.h1}>Startups in London</h1>
    </div>
  )
}
