import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import BookingForm from './pages/BookingForm'
import Confirmation from './pages/Confirmation'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  )
}

export default App
