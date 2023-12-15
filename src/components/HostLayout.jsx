import React from 'react'
import { Link,Outlet,NavLink } from 'react-router-dom'

const HostLayout = () => {

  const activeStyles ={
    color:'#161616',
    fontWeight: "bold",
    textDecoration: "underline",
  }

  return (
    <div className="host-nav">
        <nav>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            end
            to='/host'>Dashboard</NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            to='/host/income'>Income</NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            to='/host/vans'>Host</NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyles : null }
            to='/host/reviews'>Reviews</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

export default HostLayout
