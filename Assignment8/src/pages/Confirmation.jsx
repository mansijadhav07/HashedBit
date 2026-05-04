import { useLocation, useNavigate } from 'react-router-dom'
import './Confirmation.css'

function Confirmation() {
  const location = useLocation()
  const navigate = useNavigate()
  const { bookingId, name, email, mobile, movieTitle } = location.state || {}

  if (!bookingId) {
    return (
      <div className="container">
        <div className="confirmation-container">
          <h1>No booking found</h1>
          <button className="home-btn" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="confirmation-container">
        <div className="success-icon">✓</div>
        <h1>Booking Confirmed!</h1>
        <p className="success-message">Your seats have been successfully booked</p>
        
        <div className="booking-details">
          <div className="detail-row">
            <span className="label">Booking ID:</span>
            <span className="value booking-id">{bookingId}</span>
          </div>
          <div className="detail-row">
            <span className="label">Movie:</span>
            <span className="value">{movieTitle}</span>
          </div>
          <div className="detail-row">
            <span className="label">Name:</span>
            <span className="value">{name}</span>
          </div>
          <div className="detail-row">
            <span className="label">Email:</span>
            <span className="value">{email}</span>
          </div>
          <div className="detail-row">
            <span className="label">Mobile:</span>
            <span className="value">{mobile}</span>
          </div>
        </div>
        
        <button className="home-btn" onClick={() => navigate('/')}>
          Book Another Movie
        </button>
      </div>
    </div>
  )
}

export default Confirmation
