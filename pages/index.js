import Head from 'next/head'
import Header from '@components/Header'
const fetch = require('node-fetch')
import companies from '../data/data01.json'
import CompanyCard from '@components/CompanyCard'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>London Startups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'grid-container'}>
        {companies.map((company, index) => (
          <CompanyCard company={company} key={index} />
        ))}
      </div>

    </div>
  )
}

