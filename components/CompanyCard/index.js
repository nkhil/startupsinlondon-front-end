import styles from './styles.module.css'
import Image from 'next/image'
import { BiLink } from "react-icons/bi"
import { FaLinkedin } from "react-icons/fa"

export default function CompanyCard({ company }) {
  const { companyName, link, description, logo, linkedIn } = company
  const imagePath = `/images/${logo}`
  return (
    <div className={styles.container}>
      {logo ? <img src={`${imagePath}`} width='80' /> : ''}
      <h3 className={styles.h3}>{companyName}</h3>
      <p className={styles.p}>{description}</p>
      <div className={styles.links}>
        <a href={linkedIn}><FaLinkedin size={30} /></a>
        <a href={link}>Website <BiLink size={15} color={'#000'} /></a>
      </div>
    </div>
  )
}
