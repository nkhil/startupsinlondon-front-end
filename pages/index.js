import Head from 'next/head'
import CompanyList from '@components/CompanyList'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>London Startups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CompanyList />
    </div>
  )
}

