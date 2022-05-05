import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Main from '../layout/Main'
import { getAPIData } from '../services/AxiosGet'

export default function CountryDetailsPage() {
  let { countryName } =  useParams();
  let navigate = useNavigate();
  const [country, setcountry] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  const fetchCountry = async () => {
    const { data } = await getAPIData(`name/${countryName}`)
    if (data) {
        setisLoading(false)
    }
    console.log(data[0])
    setcountry(data[0])
}

  useEffect(() => {
      fetchCountry()
  }, [])

  return (
    <>
        {isLoading
        ? <p>Carregando dados do país...</p>
        : <>
          <Header pageTitle={country.name} flag={country.flag}/>
          <Main>
            <p><b>Capital: </b>{country.capital}</p>
            <p><b>Região: </b>{country.region}</p>
            <p><b>População: </b>{country.population}</p>
            <p><b>Área: </b>{country.area}</p>
            <button onClick={() => navigate("/")}>Voltar para a Home</button>
          </Main>
          <Footer />
        </>

        }
    </>
  )
}