import React, { useState } from 'react'
import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'
import { allCountries } from '../assets/data/countries'
import Countries from '../components/Countries'
import { FlexDiv } from '../assets/styles/HomeStyle'

export default function Home() {
    const [countryFilter, setcountryFilter] = useState('')
    const [visitedCountries, setvisitedCountries] = useState([])

    function handleFilterCountry(event) {
        let newFilteredCountries = event.target.value;
        setcountryFilter(newFilteredCountries);
    }

    function toggleVisitedCountries(countryId) {
        let newVisitedCountries = [...visitedCountries]
        let isCountryVisited = newVisitedCountries.find(({id}) => id === countryId)

        if (isCountryVisited) {
            newVisitedCountries = newVisitedCountries.filter(({id}) => id !== countryId)
        } else {
            let visitedCountry = allCountries.find(({id}) => id === countryId)
            newVisitedCountries.push(visitedCountry)
        }

        setvisitedCountries(newVisitedCountries)
        console.log(newVisitedCountries)
    }

    const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

    const filteredCountries = allCountries.filter(({name}) => {
        let nameLowerCase = name.toLocaleLowerCase();
        return nameLowerCase.includes(countryFilterLowerCase)
    })

  return (
    <>
        <Header pageTitle='Home' />
        <Main>

            <label htmlFor="inputFilterCountry">Filtrar países pelo nome: </label>
            <input type="text" name="inputFilterCountry" id="inputFilterCountry" onChange={handleFilterCountry} />
            <FlexDiv>
                <Countries
                    title="Todos os países"
                    countries={filteredCountries}
                    quantityOfCountries={filteredCountries.length}
                    titleOfQuantity='Quantidade de países'
                    onCountryClick={toggleVisitedCountries}
                    visitedCountries={visitedCountries}
                />
                <Countries
                    title="Paises visitados"
                    countries={visitedCountries}
                    quantityOfCountries={visitedCountries.length}
                    titleOfQuantity='Quantidade de países visitados'
                    onCountryClick={toggleVisitedCountries}
                    visitedCountries={visitedCountries}
                />
            </FlexDiv>
        </Main>
        <Footer />
    </>
  )
}