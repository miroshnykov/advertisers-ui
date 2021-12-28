import React from 'react'
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/offers"}>offers</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header