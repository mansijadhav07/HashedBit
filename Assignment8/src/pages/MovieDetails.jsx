import { useParams, useNavigate } from 'react-router-dom'
import { movies } from '../data/movies'
import './MovieDetails.css'

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find(m => m.id === parseInt(id))

  if (!movie) {
    return <div className="container"><h1>Movie not found</h1></div>
  }

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Movies
      </button>
      <div className="movie-details">
        <div className="movie-poster">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="movie-content">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="genre">{movie.genre}</span>
            <span className="duration">⏱ {movie.duration}</span>
          </div>
          <p className="description">{movie.description}</p>
          <button 
            className="book-btn"
            onClick={() => navigate(`/booking/${movie.id}`)}
          >
            Book Seats
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
