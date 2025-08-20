import React from 'react'
import ReactDOM from 'react-dom/client'

// Use the real component directly to eliminate import confusion
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)