import React from 'react'
import './Profile.css'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const { user, logout } = useAuth()
    const navigate = useNavigate();

    const handleLogoutChange = (e) => {
        e.preventDefault();

        logout();
        navigate("/login")

    }
  return (
    <div className="profile-page">
      <div className="profile-container">

        <div className="profile-header">
          <div className="profile-avatar">
            H
          </div>

          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            <p className="profile-phone">{user.phone}</p>
          </div>
        </div>

        <div className="profile-actions">
          <button className="profile-btn">
            Edit Profile
          </button>

          <button className="profile-btn logout-btn" onClick={handleLogoutChange}>
            Logout
          </button>
        </div>

        <div className="profile-section">
          <h3>Recent Orders</h3>

          <div className="order-card">
            <p>Order #12345</p>
            <span>Delivered</span>
          </div>

          <div className="order-card">
            <p>Order #12346</p>
            <span>Processing</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
