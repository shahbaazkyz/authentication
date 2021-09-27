import React from 'react'
import {
    Link
  } from "react-router-dom";

const Nav = () => {
    return (
     <nav>
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    </li>
   
    <li className="nav-item">
      <Link className="nav-link" to="/Login">Login</Link>
    </li>
    <li className="nav-item">
      <Link to="/Register" className="nav-link">Register</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/Dashboard">Dashboard</Link>
    </li>
  </ul>
</nav>

    )
}

export default Nav

