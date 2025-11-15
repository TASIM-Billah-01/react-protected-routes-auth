import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes.jsx'
import AuthProvider from './components/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider route={<RouterProvider router={routes}></RouterProvider>}>

    </AuthProvider>
    
  </StrictMode>,
)
