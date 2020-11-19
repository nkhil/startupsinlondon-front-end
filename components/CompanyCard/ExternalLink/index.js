import styles from './styles.module.css'
import { FiExternalLink } from "react-icons/fi"

export default function ExternalLink({ url }) {
  return (
    <div className={styles.container}>
      <a href={url} className={styles.a} target="_blank">Website</a> <FiExternalLink size={10} />
    </div>
  )
}