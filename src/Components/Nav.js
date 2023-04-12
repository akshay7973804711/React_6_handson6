import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

const Nav = () => {
  return (
       <header>
              <div><Link to='/' className='link'>Home</Link></div>
              <div><Link to='/student' className='link'>Student</Link></div>
              <div><Link to='/contact' className='link'>Contact US</Link></div>
       </header>
  )
}

export default Nav