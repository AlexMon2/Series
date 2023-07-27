import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// prueba

const SerieDetail = () => {
  const { id } = useParams()
  const [serie, setSerie] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => { setSerie(data); setLoading(false) })
      .catch(err => console.error(err))
  }, [id])

  if (loading) {
    return <p>Cargando...</p>
  }

  // Quitar etiquetas
  const getPlainText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
  }

  return (
    <div className='container mt-3 bg-info'>
      <div className='card'>
        <div className='card-header'>
          <h3>{serie.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              {serie.image?.original
                ? (
                  <img src={serie.image.original} alt={serie.name} className='img-fluid' />
                  )
                : (
                  <p>No hay imagen disponible</p>
                  )}
            </div>
            <div className='col-md-8'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td>{serie.status}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>{serie.language}</td>
                  </tr>
                  <tr>
                    <td>Genres</td>
                    <td>{serie.genres.join(', ')}</td>
                  </tr>
                  <tr>
                    <td>Summary</td>
                    <td>{getPlainText(serie.summary)}</td>
                  </tr>
                </tbody>
              </table>
              <Link className='nav-link fw-bold fs-3 text-info border border-info rounded' to='/more'>More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SerieDetail
