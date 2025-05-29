import React from 'react'
import logo from '../assets/images/logo.svg'
import setting from '../assets/images/icon-sun.svg'
import ThemeToggle from './ThemeToogle'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ThemeToggle/>
    </div>
  )
}

export default Header