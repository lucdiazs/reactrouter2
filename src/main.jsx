import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import MyProvider from './context/MyContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <MyProvider>
        <BrowserRouter>
          <React.StrictMode>
             <App />
          </React.StrictMode>,
        </BrowserRouter>
    </MyProvider>
)
