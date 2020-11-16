import styles from './styles.module.css'
import Image from 'next/image'
import { BiLink } from "react-icons/bi"
import { FaLinkedin } from "react-icons/fa";

export default function CompanyCard({ company }) {
  const { companyName, link, description, logo, linkedIn } = company
  return (
    <div className={styles.container}>
      {logo ? <Image
        src={`/images/${company.logo}`}
        alt="Picture of the author"
        width={80}
        height={80}
        className={styles.image}
      /> : ''}
      <h3 className={styles.h3}>{companyName}</h3>
      <p className={styles.p}>{description}</p>
      <div className={styles.links}>
        <a href={linkedIn}><FaLinkedin size={30} /></a>
        <a href={link}><BiLink size={30} color={'#000'} /></a>
      </div>
    </div>
  )
} 