import styles from './styles.module.css'
import companyList from '../../data/data01.json'
import CompanyCard from '@components/CompanyCard'
import shuffle from '../../helpers/shuffle'

export default function CompanyList({ category, searchQuery }) {
  const companies = companyList.filter(company => {
    if (category === '') {
      return company
    } else {
      return category.includes(company.category)
    }
  })

  let list = companies

  if (searchQuery) {
    list = companies.filter(company => {
      const query = searchQuery.toLowerCase()
      const companyName = company.companyName.toLowerCase()
      return companyName.includes(query)
    })
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
