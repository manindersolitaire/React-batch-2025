import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Footer = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
    
      <h1>Desined By {user.username}</h1>
    </div>
  )
}

export default Footer
