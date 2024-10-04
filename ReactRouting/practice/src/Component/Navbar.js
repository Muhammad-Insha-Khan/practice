import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/' >Home</NavLink>
                </li>

                <li>
                    <NavLink to='/about' >About</NavLink>
                </li>

                <li>
                    <NavLink to='/service' >Service</NavLink>
                </li>
                <li>
                    <NavLink to='/user' >User</NavLink>
                </li>


                
            </ul>
        </nav>


    </div>
  )
}

export default Navbar