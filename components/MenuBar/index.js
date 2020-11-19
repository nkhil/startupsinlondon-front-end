import styles from './styles.module.css'
import Dropdown from '@components/Dropdown'
import SearchBox from '@components/SearchBox'

export default function MenuBar({ setCategory, setSearchQuery }) {
  return (
    <div className={styles.container}>
      <Dropdown setCategory={setCategory} />
      <SearchBox setSearchQuery={setSearchQuery} />
    </div>
  )
}