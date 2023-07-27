import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [series, setSeries] = useState([]) // Lista de series
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(' https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => setSeries(data))
      .catch(error => console.error(error))
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredSeries = series.filter(serie => {
    return serie.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
    <>
      <body className='bg-light'>
        <div className='container'>
          <h1>¡Elige tu serie!</h1>
          <form className='form-inline my-2 w-100'>
            <input
              type='text'
              className='form-control'
              placeholder='Buscar serie'
              value={search}
              onChange={handleSearch}
            />
          </form>
          <div className='row bg-info'>
            {
            filteredSeries.map(serie => (
              <div className='col-sm-3' key={serie.name}>
                <div className='card'>
                  <div className='card-body'>
                    <img src={serie.image.medium} alt={serie.name} />
                    <Link
                      className='card-title'
                      to={`/serie/${serie.url.split('/')[4]}`}
                    >
                      {serie.name}
                    </Link>
                  </div>
                </div>
              </div>
            )
            )
          }
          </div>
        </div>
      </body>
    </>

  )
}

export default Home
