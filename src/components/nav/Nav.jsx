import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss';

const Nav = () => {
  return (
    <div id='Nav'>
        <ul>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/blog'>Blog</Link> </li>
            <li> <Link to='/portfolio'>Portfolio</Link> </li>
            <li> <Link to='/hooks'>Hooks</Link> </li>
            <li> <Link to='/signin'>SignIn</Link> </li>
            <li> <Link to='/signup'>SignUp</Link> </li>
          
        </ul>

    </div>
  )
}

export default Nav