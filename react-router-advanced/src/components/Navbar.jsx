import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  return (
    <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/posts/7">Dynamic Post (id 7)</NavLink>

      <span style={{ marginLeft: 'auto', fontWeight: 600 }}>
        {isAuthenticated ? (
          <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </span>
    </nav>
  )
}