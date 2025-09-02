import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error =  useRouteError()
    const navigate =  useNavigate()
  return (
    <div className='jobdetails'>
      <h3>An Error occurred</h3>
      <p>{error.message}</p>
      <button onClick={()=>navigate('/')}>Go to Homepage</button>
    </div>
  )
}

export default Error
