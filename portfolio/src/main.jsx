import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import './index.css';
import App from './App.jsx';

const router = [
  {
    path: "/",
    element: <Homepage/>
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
