import styles from './styles.module.css'
import Image from 'next/image'
import { BiLink } from "react-icons/bi"
import { FaLinkedin } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi";
import ExternalLink from './ExternalLink'

export default function CompanyCard({ company }) {
  const { companyName, link, description, logo, linkedIn } = company
  const imagePath = `/images/${logo}`
  return (
    <div className={styles.container}>
      {logo ? <img src={`${imagePath}`} width='80' /> : ''}
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
