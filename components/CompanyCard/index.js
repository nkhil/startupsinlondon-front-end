import styles from './styles.module.css'
import ExternalLink from './ExternalLink'

export default function CompanyCard({ company }) {
  const { companyName, link, description, logo, linkedIn } = company
  const imagePath = `/images/${logo}`
  return (
    <div className={styles.container}>
      {logo ? <img src={`${imagePath}`} height='80' /> : ''}
      <h3 className={styles.h3}>{companyName}</h3>
      <p className={styles.p}>{description}</p>
      <div className={styles.links}>
        {/* <a href={linkedIn}><FaLinkedin size={20} /></a> */}
        {/* <a href={link}>Website <FiExternalLink size={12} color={'#000'} /></a> */}
        <ExternalLink url={link} />
      </div>
    </div>
  )
}
