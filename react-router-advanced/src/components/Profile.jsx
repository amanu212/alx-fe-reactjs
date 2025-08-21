import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <p>This area demonstrates <strong>nested routes</strong>.</p>
      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <NavLink to="details">Profile Details</NavLink>
        <NavLink to="settings">Profile Settings</NavLink>
      </div>
      <Outlet />
    </div>
  )
}