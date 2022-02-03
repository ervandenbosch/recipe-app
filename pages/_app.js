import '../styles/globals.css'
import Link from 'next/link'
import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../components/footer'
import { Searchbar } from '../components/searchbar'
import { AppWrapper } from '../components/provider'

export default function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  const handleDark = () => setDark(!dark)

  const updateSearch = e => {
  setSearch(e.target.value)
  console.log(search)
  }

  function getSearch(e) {
    e.preventDefault()
    setQuery(search)
    console.log(query)
  }

  return (
    <div className={(dark ? "dark min-h-screen" : '"min-h-screen"')} id="app">
       <div className="fixed top-0 z-5 w-full border drop-shadow-lg">
       <nav className="flex flex-row h-22  flex-nowrap border-b shadow-sm shadow-blue-400 p-4 bg-white dark:bg-gray-900 ">
       <Link href="/">
        <a className="pt-2 text-4xl font-bold text-blue-500 dark:text-blue-300">Foodnow</a>
          </Link>
  <Searchbar placeholder="Search for recipes.." getSearch={getSearch} updateSearch={updateSearch} query={query} />
  <div className="flex flex-row m-4 font-bold text-gray-600 dark:text-gray-300"> 
          <div className="flex-none flex-nowrap z-99 relative ml-5 sm:hidden">
          <FontAwesomeIcon icon={faMoon} size="1x" color={dark ? "gray-200" : "gray-600"} className="" /> / 
          <FontAwesomeIcon icon={faSun} size="1x" color={dark ? "gray-200" : "gray-600"} className="ml-1" />
            <button onClick={handleDark}>
            <FontAwesomeIcon icon={dark ? faToggleOn : faToggleOff } size="lg" color={dark ? "gray-200" : "gray-600"} className="ml-2" /></button></div>
          </div> 
  </nav>
  </div>
  <AppWrapper query ={query} >
  <Component {...pageProps} /> 
</AppWrapper>

<Footer />

</div>
  )
}
