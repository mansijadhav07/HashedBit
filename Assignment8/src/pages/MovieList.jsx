import { useNavigate } from 'react-router-dom'
import { movies } from '../data/movies'
import './MovieList.css'

function MovieList() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <h1>🎬 Movie Booking</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div 
            key={movie.id} 
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList
