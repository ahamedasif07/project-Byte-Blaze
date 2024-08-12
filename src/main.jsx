import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import BookMarks from './Pages/BookMarks.jsx';
import MainLayout from './Pages/layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element :<MainLayout></MainLayout>,
    children : [
      {
       path : '/',
       element : <Home></Home>
      },

      {
        path :'/blogs',
        element : <Blogs></Blogs>
      },
      {
        path :'/bookmarks',
        element : <BookMarks></BookMarks>
      }
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
