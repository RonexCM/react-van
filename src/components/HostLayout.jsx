import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

const HostLayout = () => {

  const activeStyles ={
    color:'#161616',
    fontWeight: "bold",
    textDecoration: "underline",
    width: "100px"
  }

  return (
    <div className="host-nav">
        <nav>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            end
            to='.'>Dashboard</NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            to='income'>Income</NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            to='vans'>Host</NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            to='reviews'>Reviews</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout
