import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import SerieDetail from '../pages/SerieDetail'
import More from '../pages/More'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/serie/:id' element={<SerieDetail />} />
      <Route path='/serie/:id/more' element={<More />} />
    </Routes>
  )
}

export default RoutesIndex
