import Head from 'next/head'
import Logo from '@components/Logo'
import CompanyList from '@components/CompanyList'
import Hero from '@components/Hero'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>London Startups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo />
      <Hero />
      <CompanyList />
    </div>
  )
}

