import styles from './styles.module.css'

export default function DropDown({ setCategory }) {
  const options = [
    { value: '', label: 'All Categories' },
    { value: 'fintech', label: 'Fintech' },
    { value: 'payments', label: 'Payments' },
    { value: 'health', label: 'Health' },
    { value: 'transport', label: 'Transport' },
  ]
  const handleChange = (e) => setCategory(e.target.value)

  return (
    <div className={styles.container}>
      Sort by category:
      <select name="cars" id="cars" className={styles.select_css} onChange={handleChange}>
        {options.map((option, i) => (
          <option value={option.value} key={i}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
