import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// prueba

const More = () => {
  const { id } = useParams()
  const [serie, setSerie] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(' https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => { setSerie(data); setLoading(false) })
      .catch(error => console.error(error))
  }, [id])

  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{serie.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-10'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Seasons</th>
                    <th>Episodes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td>{serie.st}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More
