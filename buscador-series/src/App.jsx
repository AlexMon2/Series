import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import Navbar from './components/Navbar'
import './App.css'
import More from './pages/More'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
        <More />
      </BrowserRouter>
    </>
  )
}

export default App
