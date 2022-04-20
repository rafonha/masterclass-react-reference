import { Link } from 'react-router-dom';

export default function Country({ country = [],
  onCountryClick = [],
  isVisited = false
}) {
  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(country.id)
    }
  }

  return (
    <div>
        <Link to={`/country/${country.id}`}><h3>Nome do país: {country.name}</h3></Link>
        <p>Capital: {country.capital}</p>
        <button onClick={handleCountryClick}>
          {isVisited ? "Remover país visitado" : "Adicionar país visitado" }
        </button>
    </div>
  )
}
