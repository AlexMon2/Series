import { useState, useEffect } from 'react'

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
      <div className='container'>
        <h1>Home</h1>
        <form className='form-inline my-2 w-100'>
          <input
            type='text'
            className='form-control'
            placeholder='Buscar serie'
            value={search}
            onChange={handleSearch}
          />
        </form>
        <div className='row'>
          {
            filteredSeries.map(serie => (
              <div className='col-sm-3' key={serie.name}>
                <div className='card'>
                  <div className='card-body'>
                    <img src={serie.image.medium} alt={serie.name} />
                    <h5 className='card-title'>{serie.name}</h5>
                  </div>
                </div>
              </div>
            )
            )
          }
        </div>
      </div>
    </>

  )
}

export default Home
