import React from 'react'
import Home from './pages/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Products from './pages/Products'
import About from './pages/About'

import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactFrom from './components/ContactFrom'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'
const App = () => {

  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>} />
          <Route path='products' element={<Products/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<ContactLayout/>}>
             <Route path='info' element={<ContactInfo/>}/>
             <Route path='form' element={<ContactFrom/>}/>
          </Route>
          <Route path='jobs' element={<JobsLayout/>}>
              <Route index element={<Jobs/>} loader= {jobsLoader}/>
              <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader} errorElement={<Error/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
