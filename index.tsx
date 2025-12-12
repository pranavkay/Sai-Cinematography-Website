import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// 1. Import the Router
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Add the Router with the basename */}
    <BrowserRouter basename="/Sai-Cinematography-Website">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
