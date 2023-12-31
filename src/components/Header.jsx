import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <header>
      <Link className="logo" to='/'>#VANLIFE</Link>
    <nav>
      <NavLink 
      className={({isActive}) => isActive ? "active-link" : null }
      to='/host'>Host </NavLink>
      <NavLink 
      className={({isActive}) => isActive ? "active-link" : null }
      to='/about'>About</NavLink>
      <NavLink 
      className={({isActive}) => isActive ? "active-link" : null }
      to='/vans'>Vans</NavLink>
    </nav>
    </header>
    </div>
  )
}

export default Header
