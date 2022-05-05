import React from 'react'
import { CountryLink } from '../assets/styles/CountryStyle'

export default function Country({
  country = [],
  onCountryButtonClick = null,
  isCountryVisited = false
}) {

  function handleCountryClick() {
    if(onCountryButtonClick) {
      onCountryButtonClick(country.name)
    }
  }

  return (
    <>
        <CountryLink to={`/country/${country.name}`}>Nome do país: {country.name}</CountryLink>
        <button onClick={handleCountryClick}>
          {isCountryVisited ? "Remover país visitado" : "Adicionar país visitado"}
        </button>
    </>
  )
}
