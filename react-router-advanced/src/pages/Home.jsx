import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Try the <Link to="/profile">Profile</Link> page (protected), or a <Link to="/posts/3">dynamic post</Link>.</p>
    </div>
  )
}