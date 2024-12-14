import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-dom'
//Try react router or react-router-dom if not working 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <App/>
  
  </BrowserRouter>,
)
