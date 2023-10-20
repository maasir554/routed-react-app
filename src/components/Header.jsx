import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function CustomNavLink({to, text}){  
  return (
    <NavLink to= {to} className= { ({isActive}) => `nav-link ${isActive ? "text-slate-900" : "text-slate-500" }`} >
        {text}
    </NavLink>
    )
}

function Header() {

  return (
    
    <nav className='flex flex-row items-center sm:justify-center w-full bg-slate-200 sm:gap-7 justify-around py-4'>

      <CustomNavLink to="/routed-react-app/" text="Home" />

      <CustomNavLink to="/routed-react-app/about" text="About" />

      <CustomNavLink to = "/routed-react-app/github" text="GitHub" />

      <CustomNavLink to="/routed-react-app/contact" text="Contact" />

      <CustomNavLink to="/routed-react-app/user" text="User" />

    </nav>
  )
}

export default Header