import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// prueba

const More = () => {
  const { id } = useParams()
  const [season, setSeason] = useState('')
  const [episode, setEpisode] = useState('')
  const [cast, setCast] = useState('')

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then(res => res.json())
      .then(data => setSeason(data))
      .catch(error => console.error(error))
  }, [id])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/seasons/${id}/episodes`)
      .then(res => res.json())
      .then(data => setEpisode(data))
      .catch(err => console.error(err))
  }, [id])

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then(res => res.json())
      .then(data => setCast(data))
      .catch(err => console.error(err))
  }, [id])

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>Seasons and Cast</h3>
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
                    <td>Debe salir un número{season.number}</td>
                    <td>Deben salir los episodios{episode.name}</td>
                  </tr>
                </tbody>
              </table>
              <table className='table'>
                <thead>
                  <tr>
                    <th className='col-sm-2'>Cast</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Debe salir el nombre de los actores{cast.name}</td>
                    <td>Deben salir las fotos</td>
                    <img src={cast.image.medium} alt={cast.name}
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
