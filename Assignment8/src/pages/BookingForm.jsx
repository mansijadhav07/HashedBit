import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { movies } from '../data/movies'
import './BookingForm.css'

function BookingForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find(m => m.id === parseInt(id))
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const bookingId = 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase()
    navigate('/confirmation', { 
      state: { 
        ...formData, 
        bookingId,
        movieTitle: movie.title 
      } 
    })
  }

  if (!movie) {
    return <div className="container"><h1>Movie not found</h1></div>
  }

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(`/movie/${id}`)}>
        ← Back to Movie
      </button>
      <div className="booking-form-container">
        <h1>Book Tickets for {movie.title}</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit mobile number"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingForm
