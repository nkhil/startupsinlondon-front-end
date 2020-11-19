import styles from './styles.module.css'

export default function SearchBox({ setSearchQuery }) {
  const handleChange = (e) => setSearchQuery(e.target.value)
  return (
    <input
      type="text"
      placeholder="Search companies..."
      onChange={handleChange}
      className={styles.input}
    />
  )
}