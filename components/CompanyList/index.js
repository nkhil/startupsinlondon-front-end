import styles from './styles.module.css'
import companyList from '../../data/data01.json'
import CompanyCard from '@components/CompanyCard'
import { setState } from 'react'

export default function CompanyList({ category }) {
  const companies = companyList.filter(company => {
    if (category === '') {
      return company
    } else {
      return company.category === category
    }
  })
  return (
    <div className={styles.container}>
      {companies.map((company, index) => (
        <CompanyCard company={company} key={index} />
      ))}
    </div>
  )
}
