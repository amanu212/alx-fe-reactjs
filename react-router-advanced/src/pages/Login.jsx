import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const handleLogin = () => { onLogin?.(); navigate('/profile', { replace: true }) }
  return (
    <div>
      <h1>Login</h1>
      <p>Click to simulate authentication.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}