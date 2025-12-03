import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
// import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Projectspage from './pages/Projectspage.jsx'
import NotFoundpage from './pages/NotFoundpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/projects",
    element: <Projectspage/>
  },
  {
    path: "/project/:projectId",
    element: <Projectspage/>
  },
  {
    path: "404",
    element: <NotFoundpage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
