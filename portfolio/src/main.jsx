import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Homepage from './pages/HomePage.jsx';
import Projectspage from './pages/Projectspage.jsx';
import ChallengesPage from './pages/ChallengesPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
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
    path: "challenges",
    element: <ChallengesPage/>
  },
  {
    path: "blog",
    element: <BlogPage/>
  },
    {
    path: "article",
    element: <ArticlePage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
