import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="grid w-full grid-cols-3 text-xl text-center border-b-2 border-black">
          <li className="w-full p-4">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `${
                  isActive ? ' font-black' : 'text-gray-500 font-bold'
                }  block w-full h-full`
              }
            >
              Sign In
            </NavLink>
          </li>
          <li className="w-full p-4">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `${
                  isActive ? ' font-black' : 'text-gray-500 font-bold'
                } block w-full h-full`
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li className="w-full p-4">
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                `${
                  isActive ? ' font-black' : ' text-gray-500 font-bold'
                } block w-full h-full`
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
