import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import {Home, About, Github, User, Contact} from './components'

const GHinfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/maasir554")
  return response.json()
}

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}  />
      <Route path='/home' element={<Home />}  />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route loader={GHinfoLoader} path='/github' element={<Github />} />
      <Route path='/user/:userid' element={<User />} />
      <Route path='/user' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
