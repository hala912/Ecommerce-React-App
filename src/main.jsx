
import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Approuter from './routes/Approuter'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Approuter />
  </React.StrictMode>
)
