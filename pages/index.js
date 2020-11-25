import Head from 'next/head'
import Logo from '@components/Logo'
import CompanyList from '@components/CompanyList'
import Hero from '@components/Hero'
import { useState } from 'react'
import SearchBox from '@components/SearchBox'
import MenuBar from '@components/MenuBar'

export default function Home() {
  const [category, setCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
  }
  return (
    <div className="container">
      <Head>
        <title>London Startups: Up to date list of startups in London</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="PpgQigxK4TjFLpnsnRo970vUPwijbINVOmo011dFYM0" />
      </Head>
      <Logo />
      <Hero setCategory={setCategory} />
      <MenuBar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <CompanyList category={category} searchQuery={searchQuery} />
    </div>
  )
}
