import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/todo">Todo</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
