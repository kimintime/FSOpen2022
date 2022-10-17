import React from "react"
import Country from "./Country"

const Countries = ({search, countries, showCountry}) => {
    const searchResults = countries.filter(country =>
      country.name.toLowerCase().includes(search.toString().toLowerCase()))
    
    if (searchResults.length === countries.length) {
      return (
        <div></div>
      )
    } else if (searchResults.length > 10) {
        return (
          <div>
            <p>Too many matches, please narrow your search.</p>
          </div>
        )
      } else if (searchResults.length === 1) {
        return (
          <div>
            <Country country={searchResults[0]} city={searchResults[0].capital.toLowerCase()} />
          </div>
        )
      }
      else if (searchResults.length <=  10) {
        return (
          searchResults.map(country =>
            <div key={country.name}>
             <span>{country.name}</span>{' '}
             <button value={country.name} onClick={showCountry}>Show</button>
            </div>)
        )
      } 
  }

export default Countries