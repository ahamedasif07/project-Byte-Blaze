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
import Blog from './Pages/Components/Blog.jsx';
import Content from './Pages/Components/Content.jsx';
import Author from './Pages/Components/Author.jsx';

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
        loader :()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
        element : <Blogs></Blogs>
      },
      {
        path :'/blog/:Id',
        loader : ({params})=> fetch (`https://dev.to/api/articles/${params.Id}`),
        element : <Blog></Blog>,
        children:[
          {
            index : true,
            loader : ({params})=> fetch (`https://dev.to/api/articles/${params.Id}`),
            element : <Content></Content>
          },
          {
            path : 'author',
            loader : ({params})=> fetch (`https://dev.to/api/articles/${params.Id}`),
            element :<Author></Author>,
            
          }
        ]
        
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
