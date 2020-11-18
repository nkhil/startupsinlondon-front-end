import styles from './styles.module.css'
import Emoji from 'a11y-react-emoji'
import Dropdown from '@components/Dropdown'

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.headline_container}>
        <h2 className={styles.h2}>
          The most up-to-date list of startups in London <Emoji symbol="🚀" label="rocket" />
        </h2>
      </div>
      <Dropdown />
    </div>
  )
}