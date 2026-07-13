import React, { useState } from 'react'
import './Login.css'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
    };

    login(userData);

    navigate("/")
  }

  

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Login</p>
          {/* Login Form  */}
        <form className="login-form" id="loginForm" onSubmit={handleSubmit} >
            <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

                <button type="submit" className="login-btn">
                    Login
                </button>
        </form>
      </div>
    </div>
  )
}

export default Login
