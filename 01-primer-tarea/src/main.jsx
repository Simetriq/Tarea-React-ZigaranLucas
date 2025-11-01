import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FirstApp } from './FirstApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstApp />
  </StrictMode>,
)
