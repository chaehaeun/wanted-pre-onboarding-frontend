import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `${isActive ? 'text-blue-500 font-bold' : ''}`
              }
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `${isActive ? 'text-blue-500 font-bold' : ''}`
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                `${isActive ? 'text-blue-500 font-bold' : ''}`
              }
            >
              Todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
