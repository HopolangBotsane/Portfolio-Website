import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Projectspage from './pages/Projectspage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "Projects",
    element: <Projectspage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
