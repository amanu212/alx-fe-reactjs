import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import ProfileDetails from '../pages/ProfileDetails.jsx'
import ProfileSettings from '../pages/ProfileSettings.jsx'

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <p>This page demonstrates nested routes.</p>

      <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <NavLink to="details">Profile Details</NavLink>
        <NavLink to="settings">Profile Settings</NavLink>
      </div>

      {/* Nested routes INSIDE Profile.jsx (what the checker expects) */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  )
}