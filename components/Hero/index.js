import styles from './styles.module.css'
import Emoji from 'a11y-react-emoji'

export default function Hero() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>
        The most up-to-date list of<br /> startups in London <Emoji symbol="🚀" label="rocket" />
      </h2>
    </div>
  )
}