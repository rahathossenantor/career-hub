import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Jobs from './components/Jobs/Jobs.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
