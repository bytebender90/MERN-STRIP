import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './nucleo-icons.css'
import './nucleo-svg.css' 

import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './context/ContextProvidor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider > 
    <RouterProvider router = {router} /> 
    </ContextProvider>
  </React.StrictMode>,
)
