import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { AuthMenuContainer } from './AuthMenu.styled'


const AuthMenu = () => {
  return (
    <AuthMenuContainer>
    <FaUser />
    <Link to="./auth">Login</Link>
    {/* /<Link to="#">Register</Link> */}
    </AuthMenuContainer>
  )
}

export default AuthMenu