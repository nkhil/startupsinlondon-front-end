import Head from 'next/head'
import Logo from '@components/Logo'
import CompanyList from '@components/CompanyList'
import Hero from '@components/Hero'
import { useState } from 'react'

export default function Home() {
  const [category, setCategory] = useState('')

  return (
    <div className="container">
      <Head>
        <title>London Startups</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="PpgQigxK4TjFLpnsnRo970vUPwijbINVOmo011dFYM0" />
      </Head>

      <Logo />
      <Hero />
      <CompanyList category={category} />
    </div>
  )
}
