import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Homepage from './pages/HomePage.jsx';
import Projectspage from './pages/Projectspage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import './index.css';
// import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "projects",
    element: <Projectspage/>
  },
  {
    path: "contact",
    element: <ContactPage/>
  },
  {
    path: "project",
    element: <ProjectPage/>
  },
  { 
    path: "project/:id",
    element: <ProjectPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
