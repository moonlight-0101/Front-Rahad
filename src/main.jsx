import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import InputValue from './context/InputValue.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <InputValue>
    <App />
    </InputValue>
    </BrowserRouter>
  </React.StrictMode>,
)
