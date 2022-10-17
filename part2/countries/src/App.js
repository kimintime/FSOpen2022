import { useState, useEffect } from 'react'
import axios from 'axios';
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const showCountry = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <div>
      Search: <input value={countries.name} onChange={handleSearch} />
      <Countries 
        search={search} 
        countries={countries}
        showCountry={showCountry}
      />
    </div>
  )
}

export default App;
