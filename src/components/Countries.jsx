import React from 'react'
import { ListLi, ListUl } from '../assets/styles/CountriesStyle'
import Country from './Country'

export default function Countries({
    countries = 'Países',
    title = 'Título',
    titleOfQuantity = 'Quantidade de países',
    quantityOfCountries = 0,
    onCountryClick = null,
    visitedCountries = []
}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{titleOfQuantity}: {quantityOfCountries}</p>
        <ListUl>
            {countries.map(countryData => {

              const isVisited = visitedCountries.find(({id}) => id === countryData.id)

                return <ListLi key={countryData.id}>
                  <Country country={countryData} onCountryClick={onCountryClick} isVisited={isVisited} />
                </ListLi>
            })}
        </ListUl>
    </div>
  )
}
