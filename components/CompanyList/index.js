import styles from './styles.module.css'
import companyList from '../../data/data01.json'
import CompanyCard from '@components/CompanyCard'
import { setState } from 'react'

export default function CompanyList({ category, searchQuery }) {
  const companies = companyList.filter(company => {
    if (category === '') {
      return company
    } else {
      return company.category === category
    }
  })

  let list = companies

  if (searchQuery) {
    list = companies.filter(company => (
      company.companyName.toLowerCase().includes(searchQuery)
    ))
  } else {
    list = list.slice(0, 50)
  }

  return (
    <div className={styles.container}>
      {list.map((company, index) => (
        <CompanyCard company={company} key={index} />
      ))}
    </div>
  )
}
