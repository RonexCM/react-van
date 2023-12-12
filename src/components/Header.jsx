import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <header>
      <Link className="logo" to='/'>#VANLIFE</Link>
    <nav>
      <Link to='/host'>Host </Link>
      <Link to='/about'>About</Link>
      <Link to='/vans'>Vans</Link>
    </nav>
    </header>
    </div>
  )
}

export default Header
