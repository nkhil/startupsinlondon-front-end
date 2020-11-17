import styles from './styles.module.css'
import companies from '../../data/data01.json'
import CompanyCard from '@components/CompanyCard'

export default function CompanyList() {
  return (
    <div className={styles.container}>
      {companies.map((company, index) => (
        <CompanyCard company={company} key={index} />
      ))}
    </div>
  )
}