import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Header = () => {

    const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Header
