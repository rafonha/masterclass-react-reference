import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'
import Countries from '../components/Countries'
import { FilterDiv, FlexDiv, LabelFilter } from '../assets/styles/HomeStyle'
import { getAPIData } from '../services/AxiosGet'
import mapaMundi from '../assets/images/mapa-mundi.jpg'

export default function Home() {
    const [countryFilter, setcountryFilter] = useState('')
    const [isLoading, setisLoading] = useState(true)
    const [countries, setcountries] = useState([])
    const [visitedCountries, setvisitedCountries] = useState([])

    const fetchCountries = async () => {
        const { data } = await getAPIData('all')
        if (data) {
            setisLoading(false)
        }
        setcountries(data)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    function handleFilterCountry(event) {
        let newFilteredCountries = event.target.value;
        setcountryFilter(newFilteredCountries);
    }

    const countryFilterLowerCase = countryFilter.trim().toLocaleLowerCase();

    const filteredCountries = countries.filter(({name}) => {
        let nameLowerCase = name.toLocaleLowerCase();
        return nameLowerCase.includes(countryFilterLowerCase)
    })

    function toggleVisitedCountries(countryName) {
        let newVisitedCountries = [...visitedCountries]
        let isCountryVisited = newVisitedCountries.find(({name}) => name === countryName)

        if (isCountryVisited) {
            newVisitedCountries = newVisitedCountries.filter(({name}) => name !== countryName)
        } else {
            let visitedCountry = countries.find(({name}) => name === countryName)
            newVisitedCountries.push(visitedCountry)
        }

        setvisitedCountries(newVisitedCountries)
    }

  return (
    <>
        <Header pageTitle='Home' flag={mapaMundi}/>
        <Main>
            <FilterDiv>
                <LabelFilter htmlFor="inputFilterCountry">Filtrar países pelo nome: </LabelFilter>
                <input type="text" name="inputFilterCountry" id="inputFilterCountry" onChange={handleFilterCountry} />
            </FilterDiv>
            <FlexDiv>
                {isLoading
                    ? <p>Carregando países...</p>
                    :
                    <>
                    <Countries
                        title="Todos os países"
                        countries={filteredCountries}
                        quantityOfCountries={filteredCountries.length}
                        titleOfQuantity='Quantidade de países'
                        onCountryButtonClick={toggleVisitedCountries}
                        visitedCountries={visitedCountries}
                    />
                    <Countries
                        title="Paises visitados"
                        countries={visitedCountries}
                        quantityOfCountries={visitedCountries.length}
                        titleOfQuantity='Quantidade de países visitados'
                        onCountryButtonClick={toggleVisitedCountries}
                        visitedCountries={visitedCountries}
                    />
                    </>
                }
            </FlexDiv>
        </Main>
        <Footer />
    </>
  )
}